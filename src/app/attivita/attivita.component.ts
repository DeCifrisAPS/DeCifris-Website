import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.component.html',
  styleUrls: ['./attivita.component.css']
})
export class AttivitaComponent implements OnInit {
  ngOnInit(): void {
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
