import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Notizia } from './notizia.model';

@Injectable({
    providedIn: 'root'
})
export class NotizieService {
    private basePath = 'assets/notizie/lista_notizie/';

    constructor(private http: HttpClient) { }

    getNotizie(): Observable<Notizia[]> {
        // Aggiungi qui tutti i nomi dei file
        const notiziaFiles = [
            '2024-06-07.json',
            '2024-06-04.json',
            '2024-05-10.json',
            '2024-03-25.json',
            '2024-03-01.json',
            '2024-02-26.json',
            '2023-12-14.json',
            '2023-09-07.json',
            '2023-04-17.json',
            '2023-03-12.json',
            '2023-02-14.json',
            '2022-12-21.json'
        ]; 
        const requests = notiziaFiles.map(file => this.http.get<Notizia>(`${this.basePath}${file}`));

        return forkJoin(requests);
    }
}
