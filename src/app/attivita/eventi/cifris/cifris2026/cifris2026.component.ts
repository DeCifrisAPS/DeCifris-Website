import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cifris2026',
  templateUrl: './cifris2026.component.html',
  styleUrls: ['./cifris2026.component.css']
})
export class Cifris2026Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
