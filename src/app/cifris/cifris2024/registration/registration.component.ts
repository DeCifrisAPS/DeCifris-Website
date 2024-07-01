import * as crypto from 'crypto-js';

import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
	selector: 'app-registration24',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent24 implements OnInit {

	public fee = 39000;

	readonly prices = [
		[35000, 30000, 25000, 16000, 0],
		[26000, 24000, 20000, 13000, 0],
		[15000, 12000, 11000, 6000, 0]
	]

	//---------------------------------------------------------------------------
	//---------------------------- Payment variables ----------------------------

	/*
	// TEST PHASE
	readonly ALIAS = 'ALIAS_WEB_00074470';
	readonly CHIAVESEGRETA = 'SQV946OD2KUQ4M71SHXBCB85SW3FVVQF';
	readonly HTTP_HOST = 'localhost:4200/cifris24/';
	readonly requestUrl = 'https://int-ecommerce.nexi.it/' +
						  'ecomm/ecomm/DispatcherServlet';
	*/

	// PRODUCTION PHASE
	readonly ALIAS = 'payment_3482210';
	readonly CHIAVESEGRETA = 'D68kw33a4HE9Q7352HY30v3M9kV3O50e6A2542W9';
	readonly HTTP_HOST = 'www.decifris.it/cifris24/';
	readonly requestUrl = 'https://ecommerce.nexi.it/' +
		'ecomm/ecomm/DispatcherServlet';

	readonly DIVISA = 'EUR';

	//---------------------------------------------------------------------------

	constructor() { }

	ngOnInit(): void { }

	/**
	 * Check the status of input 'dinner' eventually adding/subtracting the
	 * correct price.
	 */
	public checkDinner(event) {

		const checkButton = event.currentTarget;

		var value;

		if (checkButton.checked) {
			value = 5000;
		} else {
			value = -5000;
		}

		this.fee += value;
	}

	/**
	 * Form behaviour for companion: whenerver the companion fee is checked,
	 * dinner must be checked and disabled.
	 */
	public companionFee() {

		const dinner = <HTMLInputElement>document.getElementById('dinner');

		// Checking and disabling dinner checkbox
		dinner.checked = true;
		dinner.disabled = true;

		this.fee = 5000;
	}

	/**
	 * Form behaviour for non-companion participants: checks which option is
	 * checked and associates the correct fee, eventually adding the dinner.
	 */
	public participantFee() {

		var r, c;

		// Checking checked participation radio button
		var radio = document.getElementsByName('participation');
		for (var i = 0; i < radio.length; i++) {
			if ((<HTMLInputElement>radio[i]).checked) {
				r = i;
			}
		}

		// Checking checked fee radio button
		radio = document.getElementsByName('fee');
		for (i = 0; i < radio.length; i++) {
			if ((<HTMLInputElement>radio[i]).checked) {
				c = i;
			}
		}

		this.fee = this.prices[r][c];

		// Enabling dinner checkbox and eventually adding it
		const dinner = <HTMLInputElement>document.getElementById('dinner');
		dinner.disabled = false;
		if (dinner.checked) {
			this.fee += 5000;
		}
	}

	/**
	 * Sets this.fee as the value of the selected input button.
	 */
	public setFee() {

		// Activating all participation buttons (ALL, WORKOSHOP,...)
		var radio = document.getElementsByName('participation');
		for (var i = 0; i < radio.length; i++) {
			(<HTMLInputElement>radio[i]).disabled = false;
		}
		const companion = <HTMLInputElement>document.getElementById('companion');

		if (companion.checked) {
			// Deactivating all participation buttons (ALL, WORKOSHOP,...)
			var radio = document.getElementsByName('participation');
			for (var i = 0; i < radio.length; i++) {
				(<HTMLInputElement>radio[i]).disabled = true;
			}
			this.companionFee();
		} else {
			this.participantFee();
		}
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
		var codTrans = 'CIFRIS24_'
			+ formatDate(date, 'yyyyMMddHHmmss', 'en-US');

		var importo = this.fee;

		var macString = 'codTrans=' + codTrans +
			'divisa=' + this.DIVISA +
			'importo=' + importo +
			this.CHIAVESEGRETA;
		var macCalculated = this.hashMac(macString);

		// Filling hidden inputs
		var importoIn = <HTMLInputElement>document.getElementById('importo');
		var codTransIn = <HTMLInputElement>document.getElementById('codTrans');
		var urlIn = <HTMLInputElement>document.getElementById('url');
		var urlBackIn = <HTMLInputElement>document.getElementById('url_back');
		var macIn = <HTMLInputElement>document.getElementById('mac');
		var descrizione = <HTMLInputElement>document.getElementById('descrizione');

		importoIn.value = importo.toString();
		codTransIn.value = codTrans;
		urlIn.value = merchantServerUrl + 'payment-result';
		urlBackIn.value = merchantServerUrl + 'registration';
		macIn.value = macCalculated;

		descrizione.value = 'Enrollment for CIFRIS24 - ';
		if (this.fee <= 5000) {
			descrizione.value += 'Companion fee.';
		} else {
			descrizione.value += 'Rome, 25-26-27 September 2024.';
		}

		// Form submission
		var form = <HTMLFormElement>document.getElementById('payForm');
		form.action = this.requestUrl;
		form.submit();
	}

	/**
	 * Disables the form fields.
	 */
	public setDisabled() {

		// Disabling fee radio buttons 
		var radio = document.getElementsByName('fee');
		for (var i = 0; i < radio.length; i++) {
			(<HTMLInputElement>radio[i]).disabled = true;
		}

		// Disabling participation radio buttons 
		radio = document.getElementsByName('participation');
		for (var i = 0; i < radio.length; i++) {
			(<HTMLInputElement>radio[i]).disabled = true;
		}

		// Disabling dinner checkbox button
		var checkbox = document.getElementById('dinner');
		(<HTMLInputElement>checkbox).disabled = true;
	}

	/**
	 * Performs the checks on the payment form, then it either:
	 * - Generates a warning if something is missing;
	 * - Otherwise, disables the fields and executes the payment.
	 */
	public checkAndPay(): boolean {
		// Checking form fields
		var form = <HTMLFormElement>document.getElementById('payForm');
		var isValid = form.checkValidity();

		if (isValid) {
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
