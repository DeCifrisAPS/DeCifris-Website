import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Volume, Articolo } from './articolo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticoloService {
  private basePath = 'assets/articoli';
  constructor(private http: HttpClient) { }

  getVolumes(collana: string): Observable<Volume[]> {
    return this.http.get<Volume[]>(`${this.basePath}/${collana}.json`);
  }
}
