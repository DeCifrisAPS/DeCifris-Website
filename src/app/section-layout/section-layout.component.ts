import { NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, Injector, ViewChild, afterNextRender, effect, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

import { SectionGroup, homeLink } from './section-navigation';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-section-layout',
  standalone: true,
  imports: [NgTemplateOutlet, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './section-layout.component.html',
  styleUrl: './section-layout.component.css',
})
export class SectionLayoutComponent {
  @ViewChild('navigation', { static: true }) private navigation: ElementRef<HTMLElement>;

  readonly sidebar = inject(SidebarService);
  readonly home = homeLink;
  readonly groups: SectionGroup[] = inject(ActivatedRoute).snapshot.data['sectionNavigation'];
  readonly shortcuts = [this.home, ...this.groups.flatMap((group) => group.links)]
    .filter((link) => link.shortcut !== false);

  constructor() {
    const injector = inject(Injector);
    effect(() => {
      if (this.sidebar.open()) {
        afterNextRender(() => {
          if (this.sidebar.open()) {
            this.navigation.nativeElement.querySelector('a')?.focus({ preventScroll: true });
          }
        }, { injector });
      }
    });
  }
}
