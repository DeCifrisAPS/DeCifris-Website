import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { AttivitaServiceService } from './servizi/attivita-service.service';
import { ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild('openModal') openModal: ElementRef;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngAfterViewInit(): void {
    // Per aprire la modale all'inizio
    // this.openModal.nativeElement.click();
  }
  ngOnInit() {
    // Sottoscrizione agli eventi di navigazione del router
    this.router.events.pipe(
      // Filtro solo per NavigationEnd per intercettare quando la navigazione è completa
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        // Prendo la rotta attiva figlia, nel caso di rotte annidate
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      // Estraggo i dati dalla rotta attiva
      mergeMap(route => route.data)
    ).subscribe(data => {
      // Imposto il titolo se è presente nei dati della rotta
      if (data['title']) {
        this.titleService.setTitle(data['title']);
      }

      this.metaService.removeTag('name="description"');
      // Aggiorno i meta tag se sono presenti nei dati della rotta
      if (data['meta']) {
        data['meta'].forEach(metaTag => {
          this.metaService.updateTag(metaTag);
        });
      }
    });
  }
  onActivate(event) {
    //if (typeof window !== "undefined") {
    //  window.scroll(0, 0);
    //}
  }
  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('open');
    } else {
      sidebar.classList.toggle('closed');
    }
  }

}
