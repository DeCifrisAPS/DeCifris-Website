import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-program',
	templateUrl: './program.component.html',
	styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	public readMoreHandler(event) {
		const button = event.currentTarget;

		const targetId = button.getAttribute('targetId')
		const abstract = document.querySelector('#' + targetId);
		
		abstract.classList.toggle('expanded');
		button.textContent = 	
			abstract.classList.contains('expanded') ? 'Read less' : 'Read more';
	}
}
