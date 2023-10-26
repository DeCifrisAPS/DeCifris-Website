import * as crypto from 'crypto-js';

import { formatDate } from "@angular/common";
import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

	public firstName = '';
	public lastName = '';
	public email = '';
	public fee = 0;

	constructor() { }

	ngOnInit(): void {
	}

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
	 * Instantiates a payment issue for a given value calling the action of the
	 * specified form.
	 * 
	 * TODO:
	 * - Comments correspond to the production phase.
	 */
	public startPayment(form) {
		// Alias e chiave segreta
		var ALIAS = "ALIAS_WEB_00074470";
		var CHIAVESEGRETA = "SQV946OD2KUQ4M71SHXBCB85SW3FVVQF";

		var HTTP_HOST = "localhost:4200/cifris23/registration";
		//var HTTP_HOST = "www.decifris.it/cifris23/registration";

		//var requestUrl = "https://ecommerce.nexi.it/ecomm/ecomm/DispatcherServlet";
		var requestUrl = "https://int-ecommerce.nexi.it/ecomm/ecomm/DispatcherServlet";
		//var merchantServerUrl =	"https://" + HTTP_HOST + 
		//												"/xpay/pagamento_semplice/multivaluta/";
		var merchantServerUrl =	"http://" + HTTP_HOST + 
														"/xpay/pagamento_semplice/multivaluta/";

		var date = new Date();
		var codTrans = "TESTPS_" + formatDate(date, 'yyyyMMddHHmmss', 'en-US');

		var divisa = "EUR";
		var importo = this.fee;

		// Calcolo MAC
		var stringaMac =	"codTrans=" + codTrans +
											"divisa=" + divisa +
											"importo=" + importo +
											CHIAVESEGRETA;

		var macCalculated = this.hashMac(stringaMac);

		var requestParams = new Map<string, string>();

		// Parametri obbligatori
		requestParams["alias"] = ALIAS;
		requestParams["importo"] = importo;
		requestParams["divisa"] = divisa;
		requestParams["codTrans"] = codTrans;
		requestParams["url"] = merchantServerUrl + "esito.html";
		requestParams["url_back"] = merchantServerUrl + "annullo.html";
		requestParams["mac"] = macCalculated;

		// Parametri facoltativi
		requestParams['mail'] = this.email;
		requestParams['languageId'] = 'ENG';
		requestParams['nome'] = this.firstName;
		requestParams['cognome'] = this.lastName;

		/**
		 * Creare un form html con metodo post verso requestUrl con campi hidden
		 * contenenti requestParams
		 */
		alert('[startPayment] Due: € ' + requestParams['importo']/100 + '.00');
		form.action = requestUrl;
	}

	/**
	 * Performs the necessary checks on the form fields, returning true if
	 * everything is properly filled and false otherwise.
	 */
	public checkFields(): boolean {
		var isValid = true;

		// Input fields
		isValid = isValid && !(this.firstName === '');
		isValid = isValid && !(this.lastName === '');
		isValid = isValid && !(this.email === '');

		// Radio buttons
		isValid = isValid && (this.fee != 0);

		return isValid;
	}

	/**
	 * Disables the form fields.
	 */
	public setDisabled() {
		// Disabling input text fields
		var fnameIn = <HTMLInputElement> document.getElementById("fname");
		fnameIn.disabled = true;

		var lnameIn = <HTMLInputElement> document.getElementById("lname");
		lnameIn.disabled = true;

		var emailIn = <HTMLInputElement> document.getElementById("email");
		emailIn.disabled = true;

		//Disabling 
		var radio = document.getElementsByTagName("fee");
		for (var i = 0; i < radio.length; i++) {
			(<HTMLInputElement> radio[i]).disabled = true;
		}
	}

	/**
	 * Performs the checks on the given form, then it either:
	 * - Generates a warning if something is missing in the form;
	 * - Otherwise, executes the payment.
	 */
	public checkAndPay(form): boolean {
		// Getting values from inputs
		this.firstName = (<HTMLInputElement> document.getElementById('fname')).value;
		this.lastName = (<HTMLInputElement> document.getElementById('lname')).value;
		this.email = (<HTMLInputElement> document.getElementById('email')).value;

		// Checking fields
		var isValid = this.checkFields();

		if(isValid) {
			// Disbaling fields and executing payment with given values
			this.setDisabled();

			this.startPayment(form);
		} else {
			// Throwing error
			alert('All fields are mandatory. \n' + 
				'Please be sure to have compiled all of them.'); 
		}

		return isValid;
	}
}
