import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { AttivitaServiceService } from './servizi/attivita-service.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('openModal') openModal: ElementRef;

  constructor(
    private servizioAttivita: AttivitaServiceService,
  ) { }

  ngAfterViewInit(): void {
    // Per aprire la modale all'inizio
    // this.openModal.nativeElement.click();
  }

  scegliAttivita(s: string) {
    this.servizioAttivita.setAttivita(s);
    window.scrollTo(0, 0)
  }

  onActivate(event) {
    window.scroll(0, 0);
  }
  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('open');
    }
  }
}
