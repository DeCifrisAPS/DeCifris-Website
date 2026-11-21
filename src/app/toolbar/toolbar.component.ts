import { Component, HostListener, inject } from '@angular/core';
import { SidebarService } from '../section-layout/sidebar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  readonly sidebar = inject(SidebarService);

  @HostListener('window:resize')
  dismissDesktopNavigation(): void {
    if (this.sidebar.open() && window.matchMedia('(min-width: 992px)').matches) {
      this.sidebar.close();
    }
  }

  @HostListener('document:keydown.escape')
  closeNavigation(): void {
    if (this.sidebar.open()) this.sidebar.close(true);
  }
}
