import { Component, Input, OnInit } from '@angular/core';
import { NotizieService } from './notizie.service';
import { Notizia } from './notizia.model';

@Component({
  selector: 'app-notizie',
  templateUrl: './notizie.component.html',
  styleUrls: ['./notizie.component.css']
})
export class NotizieComponent implements OnInit {
  @Input() limit?: number;
  notizie: Notizia[] = [];

  constructor(private notizieService: NotizieService) {}

  ngOnInit(): void {
    this.notizieService.getNotizie(this.limit).subscribe(
      data => {
        this.notizie = data;
      },
      error => {
        console.error('Errore nel caricamento delle notizie:', error);
      }
    );
  }
}