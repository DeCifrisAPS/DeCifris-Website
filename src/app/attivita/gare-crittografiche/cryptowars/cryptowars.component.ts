import { Component, OnInit } from '@angular/core';
import { CryptowarsServiceService } from 'src/app/servizi/cryptowars-service.service';

@Component({
  selector: 'app-cryptowars',
  templateUrl: './cryptowars.component.html',
  styleUrls: ['./cryptowars.component.css']
})
export class CryptowarsComponent implements OnInit {

  constructor(private cryptoService: CryptowarsServiceService) { }

  lingua: string = "";

  ngOnInit(): void {
    this.lingua = this.cryptoService.getLanguage();
    this.cryptoService.notifyLanguage.subscribe({
      next: (s) => this.lingua=s
    });
  }

  impostaLingua(s: string){
    this.cryptoService.setLanguage(s);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /* Ai posteri: utilizzare del codice asincrono (async/await) mi è sembrato l'unico 
  modo per gestire la transizione della pagina alla sezione "eventi passati".*/
  async goTo(s : string){
    await this.sleep(10);
    document.getElementById(s).scrollIntoView({behavior: 'smooth'});
  }

}
