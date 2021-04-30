import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-decifris-augustae-taurinorum',
  templateUrl: './decifris-augustae-taurinorum.component.html',
  styleUrls: ['./decifris-augustae-taurinorum.component.css']
})
export class DecifrisAugustaeTaurinorumComponent implements OnInit {
  
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

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /* Ai posteri: utilizzare del codice asincrono (async/await) mi è sembrato l'unico 
  modo per gestire la transizione della pagina alla sezione "eventi passati".*/
  async goTo(s : string){
    /* this.mostraAttivita(s); */
    await this.sleep(10);
    document.getElementById(s).scrollIntoView({behavior: 'smooth'});
  }

}
