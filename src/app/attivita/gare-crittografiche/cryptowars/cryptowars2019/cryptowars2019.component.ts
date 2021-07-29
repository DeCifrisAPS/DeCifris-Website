import { Component, OnInit } from '@angular/core';
import { CryptowarsServiceService } from 'src/app/servizi/cryptowars-service.service';

@Component({
  selector: 'app-cryptowars2019',
  templateUrl: './cryptowars2019.component.html',
  styleUrls: ['./cryptowars2019.component.css']
})
export class Cryptowars2019Component implements OnInit {

  lingua: string = "";

  constructor(private cryptoService: CryptowarsServiceService) { }

  ngOnInit(): void {
    this.lingua = this.cryptoService.getLanguage();
    this.cryptoService.notifyLanguage.subscribe({
      next: (s) => this.lingua = s
    });
  }

}
