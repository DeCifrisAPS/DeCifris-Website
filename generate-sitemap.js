const { readFileSync, writeFileSync, existsSync, readdirSync, statSync } = require('node:fs');
const { join, resolve } = require('node:path');
const { SitemapStream, streamToPromise } = require('sitemap');
const ts = require('typescript');

const project = __dirname;
const output = resolve(process.argv[2] || join(project, 'dist', 'DeCifris'));
const browser = join(output, 'browser');
const hostname = 'https://www.decifris.it';

function readJson(file) {
  return JSON.parse(readFileSync(file, 'utf8').replace(/^\uFEFF/, ''));
}

function property(node, name) {
  return node.properties.find((entry) => entry.name?.text === name)?.initializer;
}

function readRedirects() {
  const file = join(project, 'src', 'app', 'app-routing.module.ts');
  const source = ts.createSourceFile(file, readFileSync(file, 'utf8'), ts.ScriptTarget.Latest);
  const routes = source.statements
    .filter(ts.isVariableStatement)
    .flatMap((statement) => [...statement.declarationList.declarations])
    .find((declaration) => declaration.name.text === 'routes');

  const redirects = new Map();
  function visit(array, parent) {
    for (const route of array.elements) {
      const segment = property(route, 'path').text;
      const path = [parent, segment].filter(Boolean).join('/');
      const redirect = property(route, 'redirectTo');
      if (redirect) {
        if (property(route, 'pathMatch')?.text !== 'full' || /[:*]/.test(path)) {
          throw new Error('Unsupported legacy redirect /' + path);
        }
        const target = redirect.text.startsWith('/') ? redirect.text : '/' + [parent, redirect.text].filter(Boolean).join('/');
        if (redirects.has('/' + path)) throw new Error('Duplicate legacy redirect /' + path);
        redirects.set('/' + path, target);
      }
      const children = property(route, 'children');
      if (children) visit(children, path);
    }
  }
  visit(routes.initializer, '');
  return redirects;
}

function pagePath(path) {
  return path === '/' ? '/' : path + '/';
}

function releasePageHtml(path) {
  return readFileSync(join(browser, path, 'index.html'), 'utf8');
}

function validateKoine(routes) {
  const directory = join(project, 'src', 'assets', 'articoli', 'koine');
  for (const file of readdirSync(directory).filter((name) => /^vol\d+\.json$/.test(name))) {
    const volume = readJson(join(directory, file));
    const path = '/koine/' + volume.id;
    if (!routes.has(path)) throw new Error('Missing Koine volume ' + path);
    for (const article of volume.articles) {
      const articlePath = path + '/' + article.id;
      if (!routes.has(articlePath) || !releasePageHtml(articlePath).includes('name="citation_title"')) {
        throw new Error('Missing prerendered Koine article or citation metadata ' + articlePath);
      }
    }
  }
}

function legacyRule(source, target, optionalSlash) {
  const literal = source.replace(/[.*+?^$()|[\]\\]/g, '\\$&');
  const suffix = optionalSlash ? '/?$' : '$';
  return 'RedirectMatch 301 "^' + literal + suffix + '" "' + hostname + target + '"';
}

async function main() {
  const manifest = readJson(join(output, 'prerendered-routes.json'));
  const routes = new Set(manifest.routes.map((path) => path.replace(/\/$/, '') || '/'));
  const redirects = readRedirects();
  if (!routes.has('/404')) throw new Error('Missing prerendered 404 document');
  validateKoine(routes);

  const excluded = new Set(['/403', '/404', '/418']);
  const pages = [...routes].sort().filter((path) =>
    !excluded.has(path) && !redirects.has(path) && !path.endsWith('/payment-result'));
  const sitemap = new SitemapStream({ hostname });
  const xml = streamToPromise(sitemap);
  for (const path of pages) {
    releasePageHtml(path);
    sitemap.write({ url: pagePath(path) });
  }
  sitemap.end();

  const rules = [];
  for (const [source, target] of redirects) {
    if (!routes.has(target) || redirects.has(target)) {
      throw new Error('Legacy route ' + source + ' has no prerendered destination: ' + target);
    }
    rules.push(legacyRule(source, pagePath(target), true));
  }
  const downloads = readJson(join(project, 'legacy-downloads.json'));
  for (const [source, target] of Object.entries(downloads)) {
    const file = join(browser, target);
    if (!existsSync(file) || !statSync(file).isFile() || source === target) {
      throw new Error('Legacy download ' + source + ' has no release file: ' + target);
    }
    rules.push(legacyRule(source, target, false));
  }
  const config = readFileSync(join(project, 'src', '.htaccess'), 'utf8').trimEnd();
  writeFileSync(join(browser, 'sitemap.xml'), await xml);
  writeFileSync(join(browser, '.htaccess'), config + '\n\n' + rules.join('\n') + '\n');
  console.log('Published ' + pages.length + ' sitemap entries and ' + rules.length + ' legacy redirects.');
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
