import * as crypto from 'crypto-js';

import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	
	public fee = 19000;

	//---------------------------------------------------------------------------
	//---------------------------- Payment variables ----------------------------

	/*
	// TEST PHASE
	readonly ALIAS = 'ALIAS_WEB_00074470';
	readonly CHIAVESEGRETA = 'SQV946OD2KUQ4M71SHXBCB85SW3FVVQF';
	readonly HTTP_HOST = 'localhost:4200/cifris23/';
	readonly requestUrl = 'https://int-ecommerce.nexi.it/' +
						  'ecomm/ecomm/DispatcherServlet';
	*/

	// PRODUCTION PHASE
	readonly ALIAS = 'payment_3482210';	
	readonly CHIAVESEGRETA = 'D68kw33a4HE9Q7352HY30v3M9kV3O50e6A2542W9';
	readonly HTTP_HOST = 'www.decifris.it/cifris23/';
	readonly requestUrl = 'https://ecommerce.nexi.it/' +
						  'ecomm/ecomm/DispatcherServlet';

	readonly DIVISA = 'EUR';

	//---------------------------------------------------------------------------

	constructor() {}

	ngOnInit(): void {}

	/**
	 * Sets this.fee as the value of the selected radio button.
	 */
	public setFee(event) {

		const radioButton = event.currentTarget;

		this.fee = radioButton.value;
	}

	/**
	 * Generates a MAC given an input string.
	 */
	public hashMac(stringaMac): string {

		var hash = crypto.SHA1(stringaMac);

		return hash.toString();
	}

	/**
	 * Instantiates a payment issue.
	 */
	public startPayment() {
	
		// Data preprocessing
		//var merchantServerUrl =	'http://' + this.HTTP_HOST;
		var merchantServerUrl = 'https://' + this.HTTP_HOST;

		var date = new Date();
		var codTrans = 'CIFRIS23_'
						+ formatDate(date, 'yyyyMMddHHmmss', 'en-US');

		var importo = this.fee;

		var macString = 'codTrans=' + codTrans +
						'divisa=' + this.DIVISA +
						'importo=' + importo +
						this.CHIAVESEGRETA;
		var macCalculated = this.hashMac(macString);

		// Filling hidden inputs
		var importoIn = <HTMLInputElement> document.getElementById('importo');
		var codTransIn = <HTMLInputElement> document.getElementById('codTrans');
		var urlIn = <HTMLInputElement> document.getElementById('url');
		var urlBackIn = <HTMLInputElement> document.getElementById('url_back');
		var macIn = <HTMLInputElement> document.getElementById('mac');
		var descrizione = <HTMLInputElement> document.getElementById('descrizione');

		importoIn.value = importo.toString();
		codTransIn.value = codTrans;
		urlIn.value = merchantServerUrl + 'payment-result';
		urlBackIn.value = merchantServerUrl + 'registration';
		macIn.value = macCalculated;

		if(this.fee == 4000) {
			descrizione.value = 'Enrollment for CIFRIS23 -' +
								'Companion fee.';
		} else {
			descrizione.value = 'Enrollment for CIFRIS23 -' +
								'Rome, 14 and 15 December 2023.';
		}

		// Form submission
		var form = <HTMLFormElement> document.getElementById('payForm');
		form.action = this.requestUrl;
		form.submit();
	}

	/**
	 * Disables the form fields.
	 */
	public setDisabled() {
		
		// Disabling radio buttons 
		var radio = document.getElementsByName('fee');
		for (var i = 0; i < radio.length; i++) {
			(<HTMLInputElement> radio[i]).disabled = true;
		}
	}

	/**
	 * Performs the checks on the payment form, then it either:
	 * - Generates a warning if something is missing;
	 * - Otherwise, disables the fields and executes the payment.
	 */
	public checkAndPay(): boolean {
		// Checking form fields
		var form = <HTMLFormElement> document.getElementById('payForm');
		var isValid = form.checkValidity();

		if(isValid) {
			// Disbaling fields and executing payment
			this.setDisabled();
			this.startPayment();
		} else {
			// Throwing error
			alert('Fields with * are mandatory. \n' + 
				  'Please be sure to have compiled all of them.'); 
		}

		return isValid;
	}
}
