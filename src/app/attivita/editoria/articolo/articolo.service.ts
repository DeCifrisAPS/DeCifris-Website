import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, NotFoundError, throwError, catchError, of } from 'rxjs';
import { Volume, Articolo } from './articolo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticoloService {
  private basePath = 'assets/articoli';
  constructor(private http: HttpClient) { }

  getVolume(collana: string, volume: string): Observable<Volume> {
    return this.http.get<Volume>(`${this.basePath}/${collana}/${volume}.json`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<Volume> {
    if (error.status === 0) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // return Observable.throwError(() => new Error('Something bad happened; please try again later.'));
    // return throwError(new NotFoundError());
    return of(null);
  }
}
