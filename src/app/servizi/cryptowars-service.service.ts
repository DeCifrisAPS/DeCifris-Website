import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptowarsServiceService {

  private language = "ita";
  public notifyLanguage = new Subject<string>();

  constructor() { 
  }

  setLanguage(s: string){
    this.language = s;
    this.notifyLanguage.next(s);
  }

  getLanguage(){
    return this.language;
  }
}
