import { Component } from '@angular/core';

@Component({
  selector: 'app-root-elements',
  templateUrl: './root-elements.component.html',
  styleUrls: ['./root-elements.component.css']
})
export class RootElementsComponent {
  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('open');
    } else {
      sidebar.classList.toggle('closed');
    }
  }
}
