export interface Volume {
  id: string;
  title: string;
  publisher: string;
  published: string;
  ISBN: string;
  ISSN: string;
  volumeLink: string;
  coverLink: string;
  articles: Articolo[];
}

export interface Author {
  name: string;
  surname?: string;
  affiliation?: string;
  ORCID?: string;
}

export interface Articolo {
  id: string;
  title: string;
  authors: Author[];
  pageRange: string;
  doi: string;
  pdfLink: string;
  abstract?: string;
  note?: string;
  keywords?: string[];
  pdfRevisedLink?: string;
}
