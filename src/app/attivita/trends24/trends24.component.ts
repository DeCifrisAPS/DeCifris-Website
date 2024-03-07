import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-trends24',
	templateUrl: './trends24.component.html',
	styleUrls: ['./trends24.component.css']
})
export class Trends24Component implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	/* Ai posteri: utilizzare del codice asincrono (async/await) mi è sembrato l'unico 
	modo per gestire la transizione della pagina alla sezione "eventi passati".*/
	async goTo(s : string){
		/* this.attivitaDaMostrare = s; */
		/* this.mostraAttivita(s); */
		await this.sleep(10);
		document.getElementById(s).scrollIntoView({behavior: 'smooth'});
	}
}
