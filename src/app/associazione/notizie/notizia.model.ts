export interface Link {
  nome: string;
  url?: string;
  routerLink?: string;
}

export interface Notizia {
  id: number;
  titolo: string;
  sottotitolo?: string;
  contenuto: string;
  autore: string;
  dataPubblicazione: string;
  immagine?: string; // URL dell'immagine opzionale
  links?: Link[]; // Lista di link opzionali
}