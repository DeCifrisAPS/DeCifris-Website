import { Component, OnInit } from '@angular/core';
import { CryptowarsServiceService } from 'src/app/servizi/cryptowars-service.service';

@Component({
  selector: 'app-cryptowars2020',
  templateUrl: './cryptowars2020.component.html',
  styleUrls: ['./cryptowars2020.component.css']
})
export class Cryptowars2020Component implements OnInit {

  lingua: string = "";

  constructor(private cryptoService: CryptowarsServiceService) { }

  ngOnInit(): void {
    this.lingua = this.cryptoService.getLanguage();
    this.cryptoService.notifyLanguage.subscribe({
      next: (s) => this.lingua = s
    });
  }

}
