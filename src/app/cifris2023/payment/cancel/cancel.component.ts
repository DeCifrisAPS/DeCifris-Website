import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cancel',
	templateUrl: './cancel.component.html',
	styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

	constructor() {}

	ngOnInit(): void {}

	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	/* Ai posteri: utilizzare del codice asincrono (async/await) mi è sembrato l'unico 
	modo per gestire la transizione della pagina alla sezione "eventi passati".*/
	async goTo(s : string) {
		
		await this.sleep(10);
		document.getElementById(s)
						.scrollIntoView({behavior: 'smooth'});
	}

}
