import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { contactNavigation, koineNavigation, mainNavigation } from '../../section-layout/section-navigation';

@Component({
  selector: 'app-sitemap',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sitemap.component.html',
  styleUrl: './sitemap.component.css',
})
export class SitemapComponent {
  protected readonly groups = mainNavigation.map(group => group.path === '/koine'
    ? { ...group, links: koineNavigation('/koine')[0].links.slice(1) }
    : group);
  protected readonly contacts = [...contactNavigation, { path: '/cookie-policy', label: 'Cookie policy' }];
  protected readonly archives = [
    ...['23', '24', '25'].map(year => ({ path: '/cifris' + year, label: 'CIFRIS' + year })),
    { path: '/attivita/centotesi-2008-2017', label: 'Cento tesi 2008–2017' },
    { path: '/attivita/centotesi-2017-2024', label: 'Cento tesi 2017–2024' },
  ];
}
