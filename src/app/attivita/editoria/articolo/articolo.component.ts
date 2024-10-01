import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ArticoloService } from './articolo.service';
import { Volume, Articolo, Author } from './articolo.model';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-articolo',
  // standalone: true,
  // imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './articolo.component.html',
  styleUrl: './articolo.component.css'
})
export class ArticoloComponent {

  bibtex: string = "";
  theVolume: Volume = { id: "", title: "", publisher: "", published: "", series: "", ISBN: "", ISSN: "", volumeLink: "", coverLink: "", articles: [] };
  theArticle: Articolo = { id: "", title: "", language: "", authors: [], pageRange: "", doi: "", pdfLink: "", abstract: "" };

  constructor(private metaService: Meta, private titleService: Title, private route: ActivatedRoute, private articoloService: ArticoloService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const volumeReq = params.get('volume');
      this.articoloService.getVolume("koine", volumeReq).subscribe((volume: Volume)  => {
        // const volumeReq = params.get('volume');
        this.theVolume = volume;
        const articleReq = params.get('article');
        // this.theVolume = data.find((v) => v.id === volumeReq);
        this.theArticle = this.theVolume.articles.find((a) => a.id === articleReq);
        /* Indexing, inclusion, crawler and more
         *
         * https://web.archive.org/web/20240420083327/https://help.scholasticahq.com/article/214-how-does-google-scholar-indexing-work-on-scholastica
         *
         * * Google Scholar
         * https://scholar.google.com/intl/it/scholar/inclusion.html
         * Make sure that:
         * a. the full text of your paper is in a PDF file that ends with ".pdf",
         * b. the title of the paper appears in a large font on top of the first page,
         * c. the authors of the paper are listed right below the title on a separate line, and
         * d. there's a bibliography section titled, e.g., "References" or "Bibliography" at the end. 
         *
         * https://www.oajournals-toolkit.org/indexing/journal-and-article-indexing
         *
         * https://www.centre-mersenne.org/en/indexing-your-journal-in-scopus/
         * https://www.elsevier.com/products/scopus/content/content-policy-and-selection
         * https://blog.scholasticahq.com/post/how-to-get-journals-indexed-scopus/
         * https://guides.lib.ku.edu/journal_editors/launching
         * https://blog.scholasticahq.com/post/getting-journal-indexed-in-scopus-case-study/
         */

        /* * Tags to populate
         *
         * * Following Twitter meta
         * twitter:site
         * twitter:card
         * twitter:title
         * twitter:description
         * twitter:image
         *
         * * Google Scholar (?)
         * citation_pdf_url
         * citation_fulltext_html_url
         * citation_abstract_html_url
         * citation_inbook_title
         * citation_title
         * citation_publication_date
         * citation_firstpage
         * citation_lastpage
         * citation_doi
         * citation_issn
         * citation_isbn
         * citation_conference_series_id
         * citation_conference_title
         * size (?)
         * description
         * citation_author
         * citation_author_email
         * citation_author_institution
         * citation_publisher
         * 
         * * Open Graph meta
         * og:url
         * og:type
         * og:site_name
         * og:title
         * og:description
         * og:image
         *
         */
        this.titleService.setTitle(this.theArticle.title);
        this.metaService.addTag({ name: 'citation_pdf_url', content: this.theArticle.pdfLink });
        this.metaService.addTag({ name: 'citation_title', content: this.theArticle.title });
        this.metaService.addTag({ name: 'citation_doi', content: this.theArticle.doi });
        this.metaService.addTag({ name: 'citation_issn', content: this.theVolume.ISSN });
        this.metaService.addTag({ name: 'citation_isbn', content: this.theVolume.ISBN });
        for (let author of this.theArticle.authors) {
          this.metaService.addTag({ name: 'citation_author', content: author.name + " " + author.surname });
        }
        this.metaService.addTag({ name: 'citation_publication_date', content: this.theVolume.publisher });
        this.metaService.addTag({ name: 'citation_publication_date', content: this.theVolume.published });

        this.bibtex = '@incollection{' + this.generateHandle('KOINE', this.theVolume.published, this.theArticle.authors) + ','
            + '\n  author = {' + this.theArticle.authors.map(a => a.surname + ", " + a.name[0] + ".").join(" and ") + '},'
            + '\n  title = {' + this.theArticle.title + '},'
            + '\n  booktitle = {' + this.theVolume.title + '},'
            + '\n  year = {' + this.theVolume.published.split(" ")[1] + '},'
            + '\n  month = {' + this.theVolume.published.split(" ")[0] + '},'
            + '\n  publisher = {' + this.theVolume.publisher + '},'
            + '\n  series = {' + this.theVolume.series + '},'
            + '\n  pages = {' + this.theArticle.pageRange.split("-").join("--") + '},'
            + '\n  volume = {' + this.theVolume.id.split("vol")[1] + '},'
            + '\n  url = {https://doi.org/' + this.theArticle.doi + '},'
            + '\n  DOI = {' + this.theArticle.doi + '},'
            + '\n  ISSN = {' + this.theVolume.ISSN + '},'
            + '\n  ISBN = {' + this.theVolume.ISBN + '},'
            + '\n  note = {' + this.theArticle.authors.map(a => a.name + ' ' + a.surname + (a.ORCID ? ', ' + a.ORCID : '')).join('; ')
              + (this.theArticle.bibNotes !== undefined ? '\n   ' + this.theArticle.bibNotes : '')
              + '}'
            + '\n}';
      });
    });
  }

  generateHandle(tag: string, published: string, authors: Author[]): string {
    let sep = ":";
    let year = published.split(' ')[1].slice(2);
    if (authors.length === 1) {
      return tag + sep + authors[0].surname.replace('\'', '').split(' ').join('') + year;
    } else if (authors.length > 1 && authors.length < 4) {
      return tag + sep + authors.map(a => a.surname.replace('\'', '').split(' ').join('').substring(0, 3)).join('') + year;
    } else {
      return tag + sep + authors.map(a => a.surname.replace('\'', '').substring(0, 1)).join('') + year;
    }
  }

}
