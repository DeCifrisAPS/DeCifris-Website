import { Component } from '@angular/core';

@Component({
  selector: 'app-home-attivita',
  templateUrl: './home-attivita.component.html',
  styleUrls: ['./home-attivita.component.css']
})
export class HomeAttivitaComponent {

  tipoAttivita: string;
  tesiVisibili: boolean = false;

  constructor(
    /* private servizioAttivita : AttivitaServiceService */
  ) { }

  ngOnInit(): void {
    /* this.servizioAttivita.getAttivita ? document.getElementById(this.servizioAttivita.getAttivita()).click() : "";
    this.servizioAttivita.attivitaChanges.subscribe((s: string) => {
      document.getElementById(s).click();
      console.log(s);
    }); */
  }

  mostraTesi() {
    this.tesiVisibili = !this.tesiVisibili;
  }
}
