import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { ArticoloService } from '../articolo/articolo.service';

@Component({
  selector: 'app-koine-volume',
  templateUrl: './volume.component.html',
  styleUrl: '../../../../styles-koine-volumes.css',
})
export class KoineVolumeComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly articles = inject(ArticoloService);

  protected readonly cover = this.route.snapshot.data['cover'];
  protected readonly displayTitle = this.route.snapshot.data['displayTitle'];
  protected readonly volume = toSignal(this.route.url.pipe(
    switchMap(([segment]) => this.articles.getVolume('koine', segment.path))
  ));

  protected readonly sections = computed(() => {
    const volume = this.volume();
    if (!volume) return [];
    const { articles } = volume;
    return volume.id === 'vol4'
      ? [
        { heading: '', articles: articles.slice(0, 1) },
        { heading: 'PRIMITIVES', articles: articles.slice(1, 4) },
        { heading: 'PROTOCOLS', articles: articles.slice(4) },
      ]
      : [{ heading: '', articles }];
  });

  protected readonly publicationDate = computed(() => {
    const published = this.volume()?.published;
    if (!published) return '';
    const date = new Date(Date.UTC(Number(published.slice(0, 4)), Number(published.slice(4, 6)) - 1, 1));
    return new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
  });
}
