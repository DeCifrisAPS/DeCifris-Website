import { Component } from '@angular/core';

@Component({
  selector: 'app-dicono-di-noi',
  templateUrl: './dicono-di-noi.component.html',
  styleUrls: ['./dicono-di-noi.component.css']
})
export class DiconoDiNoiComponent {
  articoli = [
    {
      title: 'Formiche, “La sfida della minaccia quantistica spiegata dal prof. Giulietti”',
      subtitle: '23 aprile 2023',
      image: '../../../../assets/images/notizie/articolo-formiche-postquantum-crypto.jpg',
      content: `“Le Formiche” intervistano il prof. Massimo Giulietti, direttore del Dipartimento di matematica e
                informatica dell’Università degli studi di Perugia e vicepresidente dell’associazione De Componendis Cifris,
                sulla minaccia quantistica. In via teorica è stato dimostrato da Peter Shor fin dal 1994, che l’avvento dei
                computer quantistici minaccia la sicurezza e la confidenzialità delle comunicazioni. Perfino una semplice
                ricerca online non sarebbe più sicura. Al fine di resistere alla minaccia quantistica, si stanno studiando
                alcuni protocolli crittografici che si basano su problemi matematici ritenuti irrisolvibili anche in presenza
                di un computer quantistico. Per tutelare gli interessi nazionali, è importante che l’Italia sviluppi sistemi
                per la cifratura in maniera autonoma e riservata, attraverso la costituzione di un Centro nazionale di
                crittografia.`,
      link: 'https://formiche.net/2023/04/la-sfida-della-minaccia-quantistica-spiegata-dal-prof-giulietti-unipg/'
    },
    {
      title: 'La Repubblica, “Informatica, i tempi sono ormai maturi per la crittografia”',
      subtitle: '17 marzo 2023',
      image: '../../../../assets/images/notizie/articolo-repubblica-centro-crittografia.jpg',
      content: `In questo articolo del quotidiano “la Repubblica” il professor Sala spiega l’obiettivo dell’associazione
                De Componendis Cifris, ovvero quello di animare la comunità crittografica italiana in tutte le sue componenti.
                De Cifris nasce come iniziativa nel 2017 organizzando convegni e seminari. Diventa ufficialmente
                un’associazione nel 2022 e al giorno d’oggi vi partecipano programmatori, studenti, appassionati,
                lavoratori nelle aziende italiane e non, contando una mailing list di 1300 persone e 300 associati.
                Un nuovo progetto dell’associazione è l'ideazione di una piattaforma che possa essere un punto di
                contatto tra il mondo delle aziende e gli studenti, agevolando stage e momenti di incontro.
                Il mese prossimo la De Cifris terrà un convegno alla Camera dei deputati proprio su questo argomento
                e si parlerà anche del Centro Nazionale di Crittografia, di come dovrà essere organizzato per metterlo
                al servizio degli enti pubblici che ne hanno bisogno.`,
      link: 'https://roma.repubblica.it/dossier-adv/eccellenze-lazio/2023/03/16/news/informatica_i_tempi_sono_ormai_maturi_per_la_crittografia-392097690/'
    },
    {
      title: "L'Espresso, \"Crittografia blockchain e cyber security. Una intervista al Prof. Massimiliano Sala\"",
      subtitle: '20 febbraio 2023',
      image: '../../../../assets/images/notizie/block-chain-ritagliata-1.jpg',
      content: `Nell’intervista per il giornale “l’Espresso” il professor Massimiliano Sala (Presidente di De
                Cifris) risponde ad alcune domande sulla crittografia blockchain e cyber security. Si parte parlando delle
                origini della Crittografia e della sua evoluzione fino ai giorni nostri, in cui gioca un ruolo imprescindibile
                nella difesa per attacchi cyber. L’intervista si concentra poi sulle applicazioni della
                crittografia: a partire dalle crittovalute, crypto asset e NFT, alla cifratura dei messaggi e alla crittografia finanziaria.
                Infine si discute dell’importanza di una comunità crittografica italiana unita, per cui nasce De Cifris, e
                della mancanza di un Centro Nazionale di Crittografia, per avere delle linee guida che la comunità crittografica possa seguire.`,
      link: 'http://fino-a-prova-contraria.blogautore.espresso.repubblica.it/2023/02/22/roma-crittografia-blockchain-e-cyber-security-una-intervista-al-prof-massimiliano-sala/'
    },
    {
      title: 'Difesaonline, "Quantum Threat: nuova minaccia alla Sicurezza Nazionale"',
      subtitle: '10 febbraio 2023',
      image: '../../../../assets/images/notizie/articolo-difesaonline-quantum-computer.jpg',
      content: `In questa intervista di Difesaonline il prof. Massimo Giulietti e il prof. Giovanni Schmid,
                rispettivamente vicepresidente e socio fondatore di De Cifris, trattano il tema della sicurezza nazionale del nostro
                paese nel contesto internazionale in relazione alla minaccia quantistica. Viene spiegato l’approccio
                della crittografia post-quantum e le sue varie applicazioni: dalla sicurezza informatica alla cifratura
                omomorfa, cioè l’analisi di dati cifrati permettendo di fare statistiche senza rinunciare alla privacy dei
                dati. Si analizza come altri stati, in particolare Stati Uniti e Francia, affrontino la minaccia e l‘importanza
                di avviare in Italia un Centro Nazionale di Crittografia, per creare algoritmi nazionali e per incentivare la
                ricerca.`,
      link: 'https://www.difesaonline.it/evidenza/eventi/venerd%C3%AC-10-febbraio-alle-2100-quantum-threat-nuova-minaccia-alla-sicurezza-nazionale'
    },
    {
      title: 'Formiche, “Perché serve un Centro nazionale di crittografia? Risponde il prof. Sala"',
      subtitle: '8 febbraio 2023',
      image: '../../../../assets/images/notizie/articolo-formiche-quantum-computer.jpg',
      content: `In questo articolo di “formiche.net” il professor Massimiliano Sala, Presidente di De Cifris, commenta
                l’importanza di costituire un Centro Nazionale di Crittografia in Italia per la protezione cibernetica e la
                sicurezza informatica, visti anche i recenti sviluppi, tra cui quanto accaduto il 1° dicembre scorso: la
                diplomazia francese ha inviato il suo primo cablogramma “post-quantistico”. Il punto di partenza è
                stata la nascita di De Cifris, il passo successivo è la creazione di un Centro per ideare algoritmi
                nazionali, permettendo così all’Italia di proteggersi autonomamente e avviare una transizione post-
                quantistica.`,
      link: 'https://formiche.net/2023/02/centro-nazionale-di-crittografia-prof-sala/'
    },
    {
      title: 'Difesaonline, "Quantum Threat: sfida ai sistemi crittografici moderni"',
      subtitle: '13 gennaio 2023',
      image: '../../../../assets/images/notizie/articolo-difesaonline-quantum-computer-2.jpg',
      content: `L'articolo riporta un'intervista fatta al professor Massimo Giulietti, vicepresidente di De Cifris,
                riguardo un articolo pubblicato da alcuni ricercatori cinesi, in cui affermano sia possibile infrangere anche
                le chiavi più sicure degli algoritmi crittografici classici usando un computer quantistico. Il
                professore espone perché l'articolo presenti una minaccia potenziale, ma non imminente, e poi
                specifica come altri paesi stiano correndo ai ripari. L'articolo si chiude con la presentazione della
                posizione dell'associazione De Cifris, che ritiene fondamentale creare un Centro Nazionale di
                Crittografia in Italia, al fine di studiare protocolli sicuri e sviluppare una strategia di difesa.`,
      link: 'https://www.difesaonline.it/evidenza/eventi/venerd%C3%AC-13-gennaio-alle-2100-quantum-threat-sfida-ai-sistemi-crittografici-moderni'
    }
  ];
}
