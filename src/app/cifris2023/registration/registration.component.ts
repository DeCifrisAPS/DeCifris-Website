import * as crypto from 'crypto-js';

import { formatDate } from "@angular/common";
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

	// Alias e chiave segreta
	readonly ALIAS = "ALIAS_WEB_00074470";
	readonly CHIAVESEGRETA = "SQV946OD2KUQ4M71SHXBCB85SW3FVVQF";

	readonly HTTP_HOST = "localhost:4200/cifris23/";
	//readonly HTTP_HOST = "www.decifris.it/cifris23/";

	//readonly requestUrl = 'https://ecommerce.nexi.it/' +
	//						'ecomm/ecomm/DispatcherServlet';
	readonly requestUrl = 'https://int-ecommerce.nexi.it/' +
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
	 * 
	 * TODO:
	 * - Comments correspond to the production phase.
	 */
	public startPayment() {
	
		// Data preprocessing
		//var merchantServerUrl = "https://" + this.HTTP_HOST;
		var merchantServerUrl =	'http://' + this.HTTP_HOST;

		var date = new Date();
		var codTrans = "TESTPS_" +
					   formatDate(date, 'yyyyMMddHHmmss', 'en-US');

		var importo = this.fee;

		var macString = "codTrans=" + codTrans +
						"divisa=" + this.DIVISA +
						"importo=" + importo +
						this.CHIAVESEGRETA;
		var macCalculated = this.hashMac(macString);

		// Filling hidden inputs
		var importoIn = <HTMLInputElement> document.getElementById("importo");
		var codTransIn = <HTMLInputElement> document.getElementById("codTrans");
		var urlIn = <HTMLInputElement> document.getElementById("url");
		var urlBackIn = <HTMLInputElement> document.getElementById("url_back");
		var macIn = <HTMLInputElement> document.getElementById("mac");

		importoIn.value = importo.toString();
		codTransIn.value = codTrans;
		urlIn.value = merchantServerUrl + 'homeCifris23';
		urlBackIn.value = merchantServerUrl + 'registration';
		macIn.value = macCalculated;

		// Form submission
		var form = <HTMLFormElement> document.getElementById("payForm");
		form.action = this.requestUrl;
		form.submit();
	}

	/**
	 * Disables the form fields.
	 */
	public setDisabled() {
		// Disabling input text fields
		var fnameIn = <HTMLInputElement> document.getElementById('nome');
		fnameIn.disabled = true;

		var lnameIn = <HTMLInputElement> document.getElementById('cognome');
		lnameIn.disabled = true;

		var emailIn = <HTMLInputElement> document.getElementById('mail');
		emailIn.disabled = true;

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
			alert('All fields are mandatory. \n' + 
				  'Please be sure to have compiled all of them.'); 
		}

		return isValid;
	}
}
