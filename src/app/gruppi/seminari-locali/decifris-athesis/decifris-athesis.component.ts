import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-decifris-athesis',
  templateUrl: './decifris-athesis.component.html',
  styleUrls: ['./decifris-athesis.component.css']
})
export class DecifrisAthesisComponent implements OnInit {

  /* attivitaDaMostrare : string = ""; */
  mostraFuturi: boolean = true;
  mostraPassati: boolean = true;
  fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView({behavior: 'smooth'});
    } catch (e) {
      this.goTo('recenti');
    }
  }

  toggleAttivita(s: string){
    s == 'futuri' ? this.mostraFuturi = !this.mostraFuturi : this.mostraPassati = !this.mostraPassati;
  }

  mostraAttivita(s : string){
    /* this.attivitaDaMostrare == s ? this.attivitaDaMostrare = "" : this.attivitaDaMostrare = s; */
    s == 'futuri' ? this.mostraFuturi = true : this.mostraPassati = true;
  } 
 
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /* Ai posteri: utilizzare del codice asincrono (async/await) mi è sembrato l'unico 
  modo per gestire la transizione della pagina alla sezione "eventi passati".*/
  async goTo(s : string){
    /* this.attivitaDaMostrare = s; */
    this.mostraAttivita(s);
    await this.sleep(10);
    document.getElementById(s).scrollIntoView({behavior: 'smooth'});
  }
}
