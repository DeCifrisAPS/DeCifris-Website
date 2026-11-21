import { Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private readonly router = inject(Router);
  private readonly openState = signal(false);
  private readonly sectionState = signal(false);
  private trigger?: HTMLButtonElement;

  readonly open = this.openState.asReadonly();
  readonly hasSection = this.sectionState.asReadonly();

  constructor() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      takeUntilDestroyed()
    ).subscribe(() => {
      this.sectionState.set(Boolean(this.router.routerState.snapshot.root.firstChild?.data['sectionNavigation']));
      this.close();
    });
  }

  toggle(trigger: HTMLButtonElement): void {
    if (this.open()) {
      this.close(true);
      return;
    }

    this.trigger = trigger;
    this.openState.set(true);
  }

  close(restoreFocus = false): void {
    if (restoreFocus) this.trigger?.focus();
    this.trigger = undefined;
    this.openState.set(false);
  }
}
