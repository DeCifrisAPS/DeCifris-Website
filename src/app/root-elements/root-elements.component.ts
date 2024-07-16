import { Component } from '@angular/core';

@Component({
  selector: 'app-root-elements',
  templateUrl: './root-elements.component.html',
  styleUrls: ['./root-elements.component.css']
})
export class RootElementsComponent {
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
