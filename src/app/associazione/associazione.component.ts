import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associazione',
  templateUrl: './associazione.component.html',
  styleUrls: ['./associazione.component.css']
})
export class AssociazioneComponent implements OnInit {

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
