import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-koine',
  templateUrl: './koine.component.html',
  styleUrls: ['./koine.component.css']
})
export class KoineComponent {

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('open');
    } else {
      sidebar.classList.toggle('closed');
    }
  }
}
