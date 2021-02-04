import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decifris-schola-mediolanensibus',
  templateUrl: './decifris-schola-mediolanensibus.component.html',
  styleUrls: ['./decifris-schola-mediolanensibus.component.css']
})
export class DecifrisScholaMediolanensibusComponent implements OnInit {
  attivitaDaMostrare: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  mostraAttivita(s : string){
    this.attivitaDaMostrare == s ? this.attivitaDaMostrare = "" : this.attivitaDaMostrare = s;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /* Ai posteri: utilizzare del codice asincrono (async/await) mi è sembrato l'unico 
  modo per gestire la transizione della pagina alla sezione "eventi passati".*/
  async goTo(s : string){
    this.attivitaDaMostrare = s;
    await this.sleep(10);
    document.getElementById(s).scrollIntoView({behavior: 'smooth'});
  }

}
