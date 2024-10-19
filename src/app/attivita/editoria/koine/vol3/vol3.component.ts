import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ArticoloService } from '../../articolo/articolo.service';
import { Volume, Articolo, Author } from '../../articolo/articolo.model';

@Component({
  selector: 'app-vol3',
  templateUrl: './vol3.component.html',
  styleUrl: '../../../../../styles-koine-volumes.css'
})
export class Vol3Component {

  theVolume: Volume = { id: "", title: "", publisher: "", published: "", series: "", ISBN: "", ISSN: "", volumeLink: "", coverLink: "", articles: [] };

  constructor(private metaService: Meta, private titleService: Title, private articoloService: ArticoloService) {}

  ngOnInit() {
    this.articoloService.getVolume("koine", "vol3").subscribe((volume: Volume)  => {
      this.theVolume = volume;
    });
  }

}
