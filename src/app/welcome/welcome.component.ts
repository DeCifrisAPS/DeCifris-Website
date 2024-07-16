import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
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
