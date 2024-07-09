import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cifris-cloud',
  templateUrl: './cifris-cloud.component.html',
  styleUrls: ['./cifris-cloud.component.css']
})
export class CifrisCloudComponent implements OnInit {

  fragment: string;

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    //this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {/*
    try {
      document.querySelector('#' + this.fragment).scrollIntoView({behavior: 'smooth'});
    } catch (e) {
      this.goTo('recenti');
    }*/
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /* Ai posteri: utilizzare del codice asincrono (async/await) mi è sembrato l'unico 
  modo per gestire la transizione della pagina alla sezione "eventi passati".*/
  async goTo(s : string){
    /* this.attivitaDaMostrare = s; */
    await this.sleep(10);
    document.getElementById(s).scrollIntoView({behavior: 'smooth'});
  }

}
