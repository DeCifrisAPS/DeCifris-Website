import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { ArticoloService } from './articolo.service';
import { Volume, Articolo } from './articolo.model';

export const articoloGuard: CanMatchFn = (route, segments) => {
  if (segments.length != 2) {
    return false;
  }
  const articleService = inject(ArticoloService);
  return new Promise((res, rej) => {
    // const collanaReq: string = segments[0].path;
    const collanaReq: string = "koine";
    articleService.getVolumes(collanaReq).subscribe((data: Volume[]) => {
      const volumeReq: string = segments[0].path;
      const volume: Volume = data.find((v) => v.id === volumeReq);
      if (!volume) {
        res(false);
        return;
      }
      const articleReq: string = segments[1].path;
      const article: Articolo = volume.articles.find((a) => a.id === articleReq);
      if (!article) {
        res(false);
        return;
      }
      res(true);
    });
  });
};
