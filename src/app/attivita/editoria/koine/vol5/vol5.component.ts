import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ArticoloService } from '../../articolo/articolo.service';
import { Volume, Articolo, Author } from '../../articolo/articolo.model';

@Component({
  selector: 'app-vol5',
  templateUrl: './vol5.component.html',
  styleUrl: '../../../../../styles-koine-volumes.css'
})
export class Vol5Component {

  theVolume: Volume = { id: "", title: "", publisher: "", published: "", series: "", ISBN: "", ISSN: "", volumeLink: "", coverLink: "", articles: [] };

  constructor(private metaService: Meta, private titleService: Title, private articoloService: ArticoloService) {}

  ngOnInit() {
    this.articoloService.getVolume("koine", "vol5").subscribe((volume: Volume)  => {
      this.theVolume = volume;
    });
  }

}