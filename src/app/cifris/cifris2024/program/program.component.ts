import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-program',
	templateUrl: './program.component.html',
	styleUrls: ['./program.component.css']
})
export class ProgramComponent24 implements OnInit {

	public today = formatDate(new Date(), 'dd/MM/yyy', 'en-US');

	constructor() { }

	ngOnInit(): void {
	}

	/*
	public readMoreHandler(event) {
		const button = event.currentTarget;

		const targetId = button.getAttribute('targetId')
		const abstract = document.querySelector('#' + targetId);
		
		abstract.classList.toggle('expanded');
		button.textContent = 	
			abstract.classList.contains('expanded') ? 'Read less' : 'Read more';
	}
	*/

	public openPopup(event) {
		const popup = event.currentTarget;

		const targetId = popup.getAttribute('targetId')
		const abstract = document.querySelector('#' + targetId);

		abstract.classList.toggle("show");
	}
}