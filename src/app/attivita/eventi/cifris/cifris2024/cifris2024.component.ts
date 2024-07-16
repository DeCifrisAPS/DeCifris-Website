import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cifris2024',
  templateUrl: './cifris2024.component.html',
  styleUrls: ['./cifris2024.component.css']
})
export class Cifris2024Component implements OnInit {

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
