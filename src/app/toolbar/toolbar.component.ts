import { Component, HostListener, inject } from '@angular/core';
import { contactNavigation, mainNavigation } from '../section-layout/section-navigation';
import { SidebarService } from '../section-layout/sidebar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  readonly sidebar = inject(SidebarService);
  readonly navigation = mainNavigation;
  readonly contacts = contactNavigation;
  openDropdown?: string;
  private dropdownButton?: HTMLButtonElement;

  toggleDropdown(path: string, button: HTMLButtonElement): void {
    if (this.openDropdown === path) {
      this.closeDropdown();
      return;
    }
    this.openDropdown = path;
    this.dropdownButton = button;
  }

  closeDropdown(): void {
    this.openDropdown = undefined;
    this.dropdownButton = undefined;
  }

  @HostListener('window:resize')
  dismissDesktopNavigation(): void {
    if (this.sidebar.open() && window.matchMedia('(min-width: 992px)').matches) {
      this.sidebar.close();
    }
  }

  @HostListener('document:keydown.escape')
  closeNavigation(): void {
    if (this.openDropdown) {
      this.dropdownButton?.focus();
      this.closeDropdown();
    }
    if (this.sidebar.open()) this.sidebar.close(true);
  }
}
