import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, MetaDefinition } from '@angular/platform-browser';
import { ArticoloService } from './articolo.service';
import { Volume, Articolo } from './articolo.model';

@Component({
  selector: 'app-articolo',
  standalone: true,
  imports: [],
  templateUrl: './articolo.component.html',
  styleUrl: './articolo.component.css'
})
export class ArticoloComponent {

  theVolume: Volume = { id: "", title: "", publishing: "", published: "", ISBN: "", ISSN: "", volumeLink: "", coverLink: "", articles: [] };
  theArticle: Articolo = { id: "", title: "", authors: [], pageRange: "", doi: "", pdfLink: "", abstract: "" };

  constructor(private metaService: Meta, private route: ActivatedRoute, private articoloService: ArticoloService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.articoloService.getVolumes("koine").subscribe((data: Volume[])  => {
        const volumeReq = params.get('volume');
        const articleReq = params.get('article');
        this.theVolume = data.find((v) => v.id === volumeReq);
        this.theArticle = this.theVolume.articles.find((a) => a.id === articleReq);
        // this.metaService.addTag({ name: 'description', content: 'Article number ' + this.articleId + '!' });
      });
    });
  }

}
