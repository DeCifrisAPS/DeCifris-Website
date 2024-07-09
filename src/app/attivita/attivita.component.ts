import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.component.html',
  styleUrls: ['./attivita.component.css']
})
export class AttivitaComponent implements OnInit {
  ngOnInit(): void {
    /* this.servizioAttivita.getAttivita ? document.getElementById(this.servizioAttivita.getAttivita()).click() : "";
    this.servizioAttivita.attivitaChanges.subscribe((s: string) => {
      document.getElementById(s).click();
      console.log(s);
    }); */
  }

}
