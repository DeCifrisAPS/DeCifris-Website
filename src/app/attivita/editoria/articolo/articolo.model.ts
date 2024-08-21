export interface Volume {
  id: string;
  title: string;
  publishing: string;
  published: string;
  ISBN: string;
  ISSN: string;
  volumeLink: string;
  coverLink: string;
  articles: Articolo[];
}

export interface Author {
  name: string
}

export interface Articolo {
  id: string;
  title: string;
  authors: Author[];
  pageRange: string;
  doi: string;
  pdfLink: string;
  abstract: string;
}
