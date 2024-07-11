import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private appComponent: AppComponent) {}

  toggleSidebar() {
    this.appComponent.toggleSidebar();
  }
}