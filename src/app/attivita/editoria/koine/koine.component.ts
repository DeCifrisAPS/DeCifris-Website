import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-koine',
  templateUrl: './koine.component.html',
  styleUrls: ['./koine.component.css']
})
export class KoineComponent {

  toggleSidebar(forceClose?: boolean) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      if (forceClose) {
        sidebar.classList.remove('open');
        sidebar.classList.add('closed');
      } else {
        sidebar.classList.toggle('open');
        sidebar.classList.toggle('closed');
      }
    }
  }
}
