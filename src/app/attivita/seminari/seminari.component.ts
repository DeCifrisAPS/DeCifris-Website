import { Component, OnInit } from '@angular/core';
import { AttivitaServiceService } from 'src/app/servizi/attivita-service.service';

@Component({
  selector: 'app-seminari',
  templateUrl: './seminari.component.html',
  styleUrls: ['./seminari.component.css']
})
export class SeminariComponent implements OnInit {

  tipoSeminario: string = "";

  constructor(
    /* private servizioAttivita: AttivitaServiceService */
  ) { }

  ngOnInit(): void {
    /* Necessario per evitare problemi con le children routes */
    /* this.servizioAttivita.attivitaChanges.subscribe((s: string) => {
      s == 'seminariLocali' ? this.tipoSeminario = "" : "";  
    }); */
  }

  /* scegliSeminario(s: string){
    s == this.tipoSeminario ? this.tipoSeminario = "" : this.tipoSeminario = s;
  } */

}
