const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream, statSync } = require('fs');
const path = require('path');

// Funzione per ottenere la data di ultima modifica di un file
function getLastModified(filePath) {
  try {
    const stats = statSync(filePath);
    return stats.mtime.toISOString();
  } catch (err) {
    console.error(`Errore nel leggere il file: ${filePath}. Dettagli dell'errore:`, err);
    return null; // Restituisce null in caso di errore
  }
}

// Creazione dello stream per la sitemap
const sitemap = new SitemapStream({ hostname: 'https://www.decifris.it' });
const pages = [
  // HOME
  { url: '/', changefreq: 'always', priority: 1.0, filePath: 'src/app/home/home.component.html' },

  // SEMINARI
  { url: '/seminariLocali', changefreq: 'always', priority: 0.8, filePath: 'src/app/gruppi/seminari-locali/seminari-locali.component.html' },
  { url: '/deCifrisAgora', changefreq: 'always', priority: 0.6, filePath: 'src/app/gruppi/agora/agora.component.html' },

  // CORSI
  { url: '/trends', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/decifris-trend/decifris-trend.component.html' },
  { url: '/trends24', changefreq: 'always', priority: 0.6, filePath: 'src/app/attivita/trends24/trends24.component.html' },
  { url: '/trends23', changefreq: 'always', priority: 0.6, filePath: 'src/app/attivita/trends23/trends23.component.html' },
  { url: '/trends22bis', changefreq: 'always', priority: 0.6, filePath: 'src/app/attivita/trends22/trends22bis/trends22bis.component.html' },
  { url: '/trends22', changefreq: 'always', priority: 0.6, filePath: 'src/app/attivita/trends22/trends22.component.html' },
  { url: '/blockchain-smart-contract', changefreq: 'always', priority: 0.6, filePath: 'src/app/attivita/blockchain-smart-contract/blockchain-smart-contract.component.html' },

  // EVENTI
  { url: '/eventi', changefreq: 'always', priority: 0.8, filePath: 'src/app/eventi/eventi.component.html' },
  { url: '/wcc24', changefreq: 'always', priority: 0.8, filePath: 'src/app/hosting/wcc24/wcc24.component.html' },
  { url: '/combinatorics24', changefreq: 'always', priority: 0.8, filePath: 'src/app/hosting/opera24/opera24.component.html' },
  { url: '/opera24', changefreq: 'always', priority: 0.8, filePath: 'src/app/hosting/combinatorics24/combinatorics24.component.html' },

  // CIFRIS24
  { url: '/cifris24', changefreq: 'always', priority: 0.6, filePath: 'src/app/cifris/cifris2024/home-cifris24/home-cifris24.component.html' },
  { url: '/cifris24/homeCifris24', changefreq: 'always', priority: 0.6, filePath: 'src/app/cifris/cifris2024/home-cifris24/home-cifris24.component.html' },
  { url: '/cifris24/registration', changefreq: 'always', priority: 0.5, filePath: 'src/app/cifris/cifris2024/registration/registration.component.html' },
  { url: '/cifris24/program', changefreq: 'always', priority: 0.5, filePath: 'src/app/cifris/cifris2024/program/program.component.html' },
  { url: '/cifris24/proceedings', changefreq: 'always', priority: 0.5, filePath: 'src/app/cifris/cifris2024/proceedings/proceedings.component.html' },
  { url: '/cifris24/call-for-papers', changefreq: 'always', priority: 0.5, filePath: 'src/app/cifris/cifris2024/call-for-papers/call-for-papers.component.html' },
  { url: '/cifris24/call-for-workshops', changefreq: 'always', priority: 0.5, filePath: 'src/app/cifris/cifris2024/call-for-workshops/call-for-workshops.component.html' },
  { url: '/cifris24/venue-accomodation', changefreq: 'always', priority: 0.5, filePath: 'src/app/cifris/cifris2024/venue-accomodation/venue-accomodation.component.html' },
  // CIFRIS23
  { url: '/cifris23', changefreq: 'always', priority: 0.6, filePath: 'src/app/cifris/cifris2023/home-cifris23/home-cifris23.component.html' },
  { url: '/cifris23/homeCifris23', changefreq: 'always', priority: 0.6, filePath: 'src/app/cifris/cifris2023/home-cifris23/home-cifris23.component.html' },
  { url: '/cifris23/registration', changefreq: 'always', priority: 0.5, filePath: 'src/app/cifris/cifris2023/registration/registration.component.html' },
  { url: '/cifris23/program', changefreq: 'always', priority: 0.5, filePath: 'src/app/cifris/cifris2023/program/program.component.html' },
  { url: '/cifris23/proceedings', changefreq: 'always', priority: 0.5, filePath: 'src/app/cifris/cifris2023/proceedings/proceedings.component.html' },
  { url: '/cifris23/call-for-papers', changefreq: 'always', priority: 0.5, filePath: 'src/app/cifris/cifris2023/call-for-papers/call-for-papers.component.html' },
  { url: '/cifris23/call-for-workshops', changefreq: 'always', priority: 0.5, filePath: 'src/app/cifris/cifris2023/call-for-workshops/call-for-workshops.component.html' },

  // NOTIZIE
  { url: '/notizie', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/notizie/notizie.component.html' },

  // EDITORIA
  { url: '/editoria', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/editoria.component.html' },
  { url: '/koine', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/koine/home-koine/home-koine.component.html' },
  { url: '/koine/home', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/koine/home-koine/home-koine.component.html' },
  { url: '/koine/articles-and-volumes', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/koine/articles-and-volumes/articles-and-volumes.component.html' },
  { url: '/centotesi2014-2023', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/centotesi20142023/centotesi20142023.component.html' },
  { url: '/centotesi2008-2017', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/centotesi20082017/centotesi20082017.component.html' },
];

// Aggiungi le pagine alla sitemap, inclusa la data di ultima modifica
pages.forEach(page => {
  const lastmod = getLastModified(page.filePath);
  if (lastmod) {
    sitemap.write({
      url: page.url,
      changefreq: page.changefreq,
      priority: page.priority,
      lastmod: lastmod
    });
  } else {
    console.warn(`La pagina ${page.url} non verrà inclusa nella sitemap a causa di un errore nel percorso del file.`);
  }
});

// Terminazione dello stream
sitemap.end();

// Scrittura della sitemap nel file sitemap.xml
streamToPromise(sitemap)
  .then(data => createWriteStream(path.join(__dirname, 'src', 'sitemap.xml')).write(data))
  .catch(err => console.error(err));
