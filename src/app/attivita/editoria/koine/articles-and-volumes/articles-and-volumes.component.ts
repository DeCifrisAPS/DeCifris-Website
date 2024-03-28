import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-articles-and-volumes',
	templateUrl: './articles-and-volumes.component.html',
	styleUrls: ['./articles-and-volumes.component.css']
})
export class ArticlesAndVolumesComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	public openCollapsible(event) {

		const button = <HTMLElement> event.currentTarget;
		const volume = <HTMLElement> button.nextElementSibling;

		volume.classList.toggle('show');

		// Adding an arrow to the right of the button
		const arrow = <HTMLElement> button.querySelector('.arrow');
		arrow.textContent = 
			volume.classList.contains('show') ? '\u25B2' : '\u25BC';
	}
}