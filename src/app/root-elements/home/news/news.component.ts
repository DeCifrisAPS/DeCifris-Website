import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  articoli = [
    {
      title: 'Cento Tesi di Crittografia e Codici in Italia: 2014-2023',
      date: '07 giugno 2024',
      content: `Annunciata la pubblicazione del secondo volume di Cento Tesi di Crittografia e Codici in Italia, 
                stavolta dal 2017 al 2023. Tutti i nostri soci possono partecipare! Questo sarà il sesto volume di De Cifris Koine, 
                la collana pubblicata dalla nostra casa editrice De Cifris Press.`,
      links: [
        { text: 'Vedi la pagina di Cento Tesi', link: '/centotesi2014-2023' },
        { text: 'Leggi su LinkedIn', link: "https://www.linkedin.com/feed/update/urn:li:activity:7205156305471172608" }
      ]
    },
    {
      title: 'Crittografia e Imprese per il Paese: incontro alla Camera dei Deputati',
      date: '10 maggio 2024',
      content: `Abbiamo tenuto un convegno presso la Camera dei Deputati con lo scopo di incentivare la collaborazione 
                tra le Istituzioni e le imprese più innovative, soprattutto in questo momento storico in cui è più cruciale 
                che mai sostenere la difesa del Paese proteggendo i suoi dati e le sue informazioni.`,
      image: '../../../../assets/images/notizie/fotoCamera10maggio.jpeg',
      links: [
        { text: 'Leggi su LinkedIn', link: "https://it.linkedin.com/posts/de-cifris-associazione-nazionale-8274501a5_locandina-evento-imprese-crittografia-activity-7183528855704391682-kS3K" }
      ]
    },
    {
      title: 'CIFRIS24: convegno nazionale di crittografia',
      date: '26 febbraio 2024',
      content: `Siamo lieti di invitarvi a sottomettere i vostri articoli al nostro secondo grande evento: CIFRIS24. 
                Nella nostra bellissima capitale, la città eterna di Roma, terremo un incontro di tre giorni a fine settembre 
                dove molti eccellenti crittografi presenteranno i loro risultati.`,
      links: [
        { text: 'Iscriviti a CIFRIS24', link: 'https://www.decifris.it/cifris24/registration' },
        { text: 'Leggi su LinkedIn', link: "https://www.linkedin.com/posts/de-cifris-associazione-nazionale-8274501a5_first-cfp-cifris24-activity-7167893521591386112-1TkD"}
      ]
    },
    {
      title: 'Un Centro Nazionale di crittografia al servizio del Paese: incontro alla camera dei Deputati',
      date: '17 aprile 2023',
      content: `Oggi, assieme a relatori delle Istituzioni e del mondo Accademico, abbiamo tenuto un intervento alla Sala del 
                Refettorio della Camera dei Deputati per discutere il ruolo che un centro nazionale di crittografia potrebbe avere 
                per il nostro Paese.`,
      image: '../../../../assets/images/notizie/fotoCamera17aprile.jpeg',
      links: [
        { text: 'Leggi su LinkedIn', link: "https://it.linkedin.com/posts/de-cifris-associazione-nazionale-8274501a5_locandina-evento-imprese-crittografia-activity-7183528855704391682-kS3K" }
      ]
    }
  ];

}
