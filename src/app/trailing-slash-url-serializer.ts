import { DefaultUrlSerializer, UrlTree } from '@angular/router';

/**
 * Keeps a trailing slash in generated application URLs.
 *
 * The site is deployed as a set of prerendered directories (for example
 * /ixh26/index.html). Linking to /ixh26 makes the web server redirect to
 * /ixh26/, which can serve a stale page from cache; linking to /ixh26/
 * directly avoids the redirect.
 */
export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {
  serialize(tree: UrlTree): string {
    const url = super.serialize(tree);
    const suffixIndex = url.search(/[?#]/);
    const path = suffixIndex === -1 ? url : url.slice(0, suffixIndex);
    const suffix = suffixIndex === -1 ? '' : url.slice(suffixIndex);

    if (path === '/' || path.endsWith('/')) {
      return `${path}${suffix}`;
    }

    return `${path}/${suffix}`;
  }
}
