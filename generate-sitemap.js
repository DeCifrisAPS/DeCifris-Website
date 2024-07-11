const { SitemapStream, streamToPromise } = import('sitemap');
const { createWriteStream, statSync } = import('fs');
const path = import('path');

console.log(`[de-cifris-site/generate-sitemap.js] Generando la sitemap.`);
// Funzione per ottenere la data di ultima modifica di un file
function getLastModified(filePath) {
  try {
    const stats = statSync(filePath);
    return stats.mtime.toISOString();
  } catch (err) {
    console.error(`[de-cifris-site/generate-sitemap.js] Errore nel leggere il file: ${filePath}.`);
    return null; // Restituisce null in caso di errore
  }
}

// Creazione dello stream per la sitemap
const sitemap = new SitemapStream({ hostname: 'https://www.decifris.it' });
const pages = [
  { url: '/', changefreq: 'always', priority: 1.0, filePath: 'src/app/root-elements/home/home.component.html' },
  { url: '/contatti', changefreq: 'always', priority: 0.8, filePath: 'src/app/root-elements/contatti/contatti.component.html' },
  { url: '/cookie-policy', changefreq: 'always', priority: 0.8, filePath: 'src/app/root-elements/cookie-policy/cookie-policy.component.html' },
  { url: '/mailing-list', changefreq: 'always', priority: 0.8, filePath: 'src/app/root-elements/mailing-list/mailing-list.component.html' },
  { url: '/opera24', changefreq: 'always', priority: 0.8, filePath: 'src/app/root-elements/hosting/opera24/opera24.component.html' },
  { url: '/combinatorics24', changefreq: 'always', priority: 0.8, filePath: 'src/app/root-elements/hosting/combinatorics24/combinatorics24.component.html' },
  { url: '/wcc24', changefreq: 'always', priority: 0.8, filePath: 'src/app/root-elements/hosting/wcc24/wcc24.component.html' },

  { url: '/associazione', changefreq: 'always', priority: 1.0, filePath: 'src/app/associazione/home-associazione/home-associazione.component.html' },
  { url: '/associazione/statuto', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/statuto/statuto.component.html' },
  { url: '/associazione/regolamento', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/regolamento/regolamento.component.html' },
  { url: '/associazione/organi-direttivi', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/organi-direttivi/organi-direttivi.component.html' },
  { url: '/associazione/advisory-board', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/advisory-board/advisory-board.component.html' },
  { url: '/associazione/posizioni-ricerca', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/posizioni-ricerca/posizioni-ricerca.component.html' },
  { url: '/associazione/stage-tirocini', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/stage-tirocini/stage-tirocini.component.html' },
  { url: '/associazione/associarsi-benemeriti', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/benemeriti/benemeriti.component.html' },
  { url: '/associazione/associarsi', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/associarsi/associarsi.component.html' },
  { url: '/associazione/obiettivi', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/obiettivi/obiettivi.component.html' },
  { url: '/associazione/dicono-di-noi', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/notizie/dicono-di-noi/dicono-di-noi.component.html' },
  { url: '/associazione/notizie', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/notizie/notizie.component.html' },

  { url: '/welcome', changefreq: 'always', priority: 1.0, filePath: 'src/app/welcome/home-welcome/home-welcome.component.html' },
  { url: '/welcome/ricercatori', changefreq: 'always', priority: 0.8, filePath: 'src/app/welcome/per-accademia/per-accademia.component.html' },
  { url: '/welcome/azienda', changefreq: 'always', priority: 0.8, filePath: 'src/app/welcome/per-aziende/per-aziende.component.html' },
  { url: '/welcome/insegnanti', changefreq: 'always', priority: 0.8, filePath: 'src/app/welcome/per-insegnanti/per-insegnanti.component.html' },
  { url: '/welcome/curiosi', changefreq: 'always', priority: 0.8, filePath: 'src/app/welcome/per-curiosi/per-curiosi.component.html' },
  { url: '/welcome/studenti', changefreq: 'always', priority: 0.8, filePath: 'src/app/welcome/per-studenti/per-studenti.component.html' },

  { url: '/attivita', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/home-attivita/home-attivita.component.html' },
  { url: '/attivita/editoria', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/editoria.component.html' },
  { url: '/attivita/centotesi-2008-2017', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/centotesi20082017/centotesi20082017.component.html' },
  { url: '/attivita/centotesi-2014-2023', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/centotesi20142023/centotesi20142023.component.html' },
  { url: '/attivita/corsi', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/corsi/corsi.component.html' },
  { url: '/attivita/trends24', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/corsi/trends24/trends24.component.html' },
  { url: '/attivita/trends23', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/corsi/trends23/trends23.component.html' },
  { url: '/attivita/trends22bis', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/corsi/trends22/trends22bis/trends22bis.component.html' },
  { url: '/attivita/trends22', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/corsi/trends22/trends22.component.html' },
  { url: '/attivita/y2y-blockchain', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/corsi/blockchain-smart-contract/blockchain-smart-contract.component.html' },
  { url: '/attivita/seminari', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/seminari.component.html' },
  { url: '/attivita/eruditorum', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/decifris-eruditorum/decifris-eruditorum.component.html' },
  { url: '/attivita/decifris-historiae', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/decifris-historiae/decifris-historiae.component.html' },
  { url: '/attivita/decifris-athesis', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/decifris-athesis/decifris-athesis.component.html' },
  { url: '/attivita/decifris-agora', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/agora/agora.component.html' },
  { url: '/attivita/decifris-augustaeTaurinorum', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/decifris-augustae-taurinorum/decifris-augustae-taurinorum.component.html' },
  { url: '/attivita/decifris-scholaLatina', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/decifris-schola-latina/decifris-schola-latina.component.html' },
  { url: '/attivita/decifris-mediolanensibus', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/decifris-schola-mediolanensibus/decifris-schola-mediolanensibus.component.html' },
  { url: '/attivita/cifrischain', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/cifris-chain/cifris-chain.component.html' },
  { url: '/attivita/quantumcifris', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/quantum-cifris/quantum-cifris.component.html' },
  { url: '/attivita/cifriscloud', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/cifris-cloud/cifris-cloud.component.html' },
  { url: '/attivita/mathcifris', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/math-cifris/math-cifris.component.html' },
  { url: '/attivita/pqcifris', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/pq-cifris/pq-cifris.component.html' },
  { url: '/attivita/eventi', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/eventi/eventi.component.html' },
  { url: '/attivita/gare-crittografiche', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/gare-crittografiche/gare-crittografiche.component.html' },
  { url: '/attivita/iniziative-divulgative', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/iniziative-divulgative/iniziative-divulgative.component.html' },
  { url: '/attivita/didattica-universitaria', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/didattica-universitaria/didattica-universitaria.component.html' },
  { url: '/cifris24', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/eventi/cifris/cifris2024/cifris2024.component.html' },
  { url: '/cifris24/', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/eventi/cifris/cifris2024/home-cifris24/home-cifris24.component.html' },
  { url: '/cifris24/venue', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/venue-accomodation/venue-accomodation.component.html' },
  { url: '/cifris24/call-for-papers', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/call-for-papers/call-for-papers.component.html' },
  { url: '/cifris24/call-for-workshops', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/call-for-workshops/call-for-workshops.component.html' },
  { url: '/cifris24/program-committee', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/program-committee/program-committee.component.html' },
  { url: '/cifris24/registration', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/registration/registration.component.html' },
  { url: '/cifris24/program', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/program/program.component.html' },
  { url: '/cifris24/proceedings', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/proceedings/proceedings.component.html' },
  //{ url: '/cifris24/payment-result', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/payment-result/payment-result.component.html' },
  { url: '/cifris23', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/eventi/cifris/cifris2023/cifris2023.component.html' },
  { url: '/cifris23/', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/eventi/cifris/cifris2023/home-cifris23/home-cifris23.component.html' },
  { url: '/cifris23/call-for-papers', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2023/call-for-papers/call-for-papers.component.html' },
  { url: '/cifris23/call-for-workshops', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2023/call-for-workshops/call-for-workshops.component.html' },
  { url: '/cifris23/program-committee', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2023/program-committee/program-committee.component.html' },
  { url: '/cifris23/registration', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2023/registration/registration.component.html' },
  { url: '/cifris23/program', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2023/program/program.component.html' },
  { url: '/cifris23/proceedings', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2023/proceedings/proceedings.component.html' },
  //{ url: '/cifris23/payment-result', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2023/payment-result/payment-result.component.html' },
  { url: '/koine', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/editoria/koine/koine.component.html' },
  { url: '/koine/', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/editoria/koine/home-koine/home-koine.component.html' },
  { url: '/koine/articles-and-volumes', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/koine/articles-and-volumes/articles-and-volumes.component.html' },
  { url: '/koine/editorial-board', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/koine/editorial-board/editorial-board.component.html' },
  { url: '/koine/vol1', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/koine/vol1/vol1.component.html' },
  { url: '/koine/vol2', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/koine/vol2/vol2.component.html' },


  // uguali, ma con / alla fine, a volte Google lo richiede
  { url: '/contatti/', changefreq: 'always', priority: 0.8, filePath: 'src/app/root-elements/contatti/contatti.component.html' },
  { url: '/cookie-policy/', changefreq: 'always', priority: 0.8, filePath: 'src/app/root-elements/cookie-policy/cookie-policy.component.html' },
  { url: '/mailing-list/', changefreq: 'always', priority: 0.8, filePath: 'src/app/root-elements/mailing-list/mailing-list.component.html' },
  { url: '/opera24/', changefreq: 'always', priority: 0.8, filePath: 'src/app/root-elements/hosting/opera24/opera24.component.html' },
  { url: '/combinatorics24/', changefreq: 'always', priority: 0.8, filePath: 'src/app/root-elements/hosting/combinatorics24/combinatorics24.component.html' },
  { url: '/wcc24/', changefreq: 'always', priority: 0.8, filePath: 'src/app/root-elements/hosting/wcc24/wcc24.component.html' },

  { url: '/associazione/', changefreq: 'always', priority: 1.0, filePath: 'src/app/associazione/home-associazione/home-associazione.component.html' },
  { url: '/associazione/statuto/', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/statuto/statuto.component.html' },
  { url: '/associazione/regolamento/', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/regolamento/regolamento.component.html' },
  { url: '/associazione/organi-direttivi/', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/organi-direttivi/organi-direttivi.component.html' },
  { url: '/associazione/advisory-board/', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/advisory-board/advisory-board.component.html' },
  { url: '/associazione/posizioni-ricerca/', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/posizioni-ricerca/posizioni-ricerca.component.html' },
  { url: '/associazione/stage-tirocini/', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/stage-tirocini/stage-tirocini.component.html' },
  { url: '/associazione/associarsi-benemeriti/', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/benemeriti/benemeriti.component.html' },
  { url: '/associazione/associarsi/', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/associarsi/associarsi.component.html' },
  { url: '/associazione/obiettivi/', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/obiettivi/obiettivi.component.html' },
  { url: '/associazione/dicono-di-noi/', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/notizie/dicono-di-noi/dicono-di-noi.component.html' },
  { url: '/associazione/notizie/', changefreq: 'always', priority: 0.8, filePath: 'src/app/associazione/notizie/notizie.component.html' },

  { url: '/welcome/', changefreq: 'always', priority: 1.0, filePath: 'src/app/welcome/home-welcome/home-welcome.component.html' },
  { url: '/welcome/ricercatori/', changefreq: 'always', priority: 0.8, filePath: 'src/app/welcome/per-accademia/per-accademia.component.html' },
  { url: '/welcome/azienda/', changefreq: 'always', priority: 0.8, filePath: 'src/app/welcome/per-aziende/per-aziende.component.html' },
  { url: '/welcome/insegnanti/', changefreq: 'always', priority: 0.8, filePath: 'src/app/welcome/per-insegnanti/per-insegnanti.component.html' },
  { url: '/welcome/curiosi/', changefreq: 'always', priority: 0.8, filePath: 'src/app/welcome/per-curiosi/per-curiosi.component.html' },
  { url: '/welcome/studenti/', changefreq: 'always', priority: 0.8, filePath: 'src/app/welcome/per-studenti/per-studenti.component.html' },

  { url: '/attivita/', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/home-attivita/home-attivita.component.html' },
  { url: '/attivita/editoria/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/editoria.component.html' },
  { url: '/attivita/centotesi-2008-2017/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/centotesi20082017/centotesi20082017.component.html' },
  { url: '/attivita/centotesi-2014-2023/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/centotesi20142023/centotesi20142023.component.html' },
  { url: '/attivita/corsi/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/corsi/corsi.component.html' },
  { url: '/attivita/trends24/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/corsi/trends24/trends24.component.html' },
  { url: '/attivita/trends23/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/corsi/trends23/trends23.component.html' },
  { url: '/attivita/trends22bis/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/corsi/trends22/trends22bis/trends22bis.component.html' },
  { url: '/attivita/trends22/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/corsi/trends22/trends22.component.html' },
  { url: '/attivita/y2y-blockchain/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/corsi/blockchain-smart-contract/blockchain-smart-contract.component.html' },
  { url: '/attivita/seminari/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/seminari.component.html' },
  { url: '/attivita/eruditorum/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/decifris-eruditorum/decifris-eruditorum.component.html' },
  { url: '/attivita/decifris-historiae/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/decifris-historiae/decifris-historiae.component.html' },
  { url: '/attivita/decifris-athesis/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/decifris-athesis/decifris-athesis.component.html' },
  { url: '/attivita/decifris-agora/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/agora/agora.component.html' },
  { url: '/attivita/decifris-augustaeTaurinorum/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/decifris-augustae-taurinorum/decifris-augustae-taurinorum.component.html' },
  { url: '/attivita/decifris-scholaLatina/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/decifris-schola-latina/decifris-schola-latina.component.html' },
  { url: '/attivita/decifris-mediolanensibus/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/decifris-schola-mediolanensibus/decifris-schola-mediolanensibus.component.html' },
  { url: '/attivita/cifrischain/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/cifris-chain/cifris-chain.component.html' },
  { url: '/attivita/quantumcifris/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/quantum-cifris/quantum-cifris.component.html' },
  { url: '/attivita/cifriscloud/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/cifris-cloud/cifris-cloud.component.html' },
  { url: '/attivita/mathcifris/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/math-cifris/math-cifris.component.html' },
  { url: '/attivita/pqcifris/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/seminari/pq-cifris/pq-cifris.component.html' },
  { url: '/attivita/eventi/', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/eventi/eventi.component.html' },
  { url: '/attivita/gare-crittografiche/', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/gare-crittografiche/gare-crittografiche.component.html' },
  { url: '/attivita/iniziative-divulgative/', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/iniziative-divulgative/iniziative-divulgative.component.html' },
  { url: '/attivita/didattica-universitaria/', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/didattica-universitaria/didattica-universitaria.component.html' },
  { url: '/cifris24/', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/eventi/cifris/cifris2024/cifris2024.component.html' },
  { url: '/cifris24/venue/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/venue-accomodation/venue-accomodation.component.html' },
  { url: '/cifris24/call-for-papers/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/call-for-papers/call-for-papers.component.html' },
  { url: '/cifris24/call-for-workshops/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/call-for-workshops/call-for-workshops.component.html' },
  { url: '/cifris24/program-committee/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/program-committee/program-committee.component.html' },
  { url: '/cifris24/registration/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/registration/registration.component.html' },
  { url: '/cifris24/program/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/program/program.component.html' },
  { url: '/cifris24/proceedings/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/proceedings/proceedings.component.html' },
  //{ url: '/cifris24/payment-result/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2024/payment-result/payment-result.component.html' },
  { url: '/cifris23/', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/eventi/cifris/cifris2023/cifris2023.component.html' },
  { url: '/cifris23/call-for-papers/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2023/call-for-papers/call-for-papers.component.html' },
  { url: '/cifris23/call-for-workshops/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2023/call-for-workshops/call-for-workshops.component.html' },
  { url: '/cifris23/program-committee/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2023/program-committee/program-committee.component.html' },
  { url: '/cifris23/registration/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2023/registration/registration.component.html' },
  { url: '/cifris23/program/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2023/program/program.component.html' },
  { url: '/cifris23/proceedings/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2023/proceedings/proceedings.component.html' },
  //{ url: '/cifris23/payment-result/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/eventi/cifris/cifris2023/payment-result/payment-result.component.html' },
  { url: '/koine/', changefreq: 'always', priority: 1.0, filePath: 'src/app/attivita/editoria/koine/koine.component.html' },
  { url: '/koine/articles-and-volumes/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/koine/articles-and-volumes/articles-and-volumes.component.html' },
  { url: '/koine/editorial-board/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/koine/editorial-board/editorial-board.component.html' },
  { url: '/koine/vol1/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/koine/vol1/vol1.component.html' },
  { url: '/koine/vol2/', changefreq: 'always', priority: 0.8, filePath: 'src/app/attivita/editoria/koine/vol2/vol2.component.html' },

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
    console.warn(`[de-cifris-site/generate-sitemap.js] La pagina ${page.url} non verrà inclusa nella sitemap a causa di un errore nel percorso del file.`);
  }
});

// Terminazione dello stream
sitemap.end();

// Scrittura della sitemap nel file sitemap.xml
streamToPromise(sitemap)
  .then(data => createWriteStream(path.join(__dirname, 'src', 'sitemap.xml')).write(data))
  .catch(err => console.error(err));
