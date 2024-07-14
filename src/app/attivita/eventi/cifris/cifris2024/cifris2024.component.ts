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
  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('open');
    } else {
      sidebar.classList.toggle('closed');
    }
  }
}
