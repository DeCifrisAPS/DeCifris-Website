import { Component } from '@angular/core';

@Component({
  selector: 'app-cifris2023',
  templateUrl: './cifris2023.component.html',
  styleUrls: ['./cifris2023.component.css']
})
export class Cifris2023Component {

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /* Ai posteri: utilizzare del codice asincrono (async/await) mi è sembrato l'unico 
  modo per gestire la transizione della pagina alla sezione "eventi passati".*/
  async goTo(s: string) {
    await this.sleep(10);
    document.getElementById(s).scrollIntoView({ behavior: 'smooth' });
  }

}
