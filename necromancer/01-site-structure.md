# Site structure and URL tree

The public structure already has recognisable destinations for the association, activities and Koine. The main problem is discoverability. Visitors encounter some of the same links in several overviews, while conference and course archives use different paths and sit in different source folders. The production build publishes 401 canonical URLs. They are all reachable from the homepage through links in the generated HTML, including the HTML sitemap. Reachability alone does not show how easily a visitor can find a page.

## Public URL tree

| Public destination | Purpose and current source |
| --- | --- |
| / | Overview, upcoming events, recent news and a direct link to the current Koine volume. Home, contacts, mailing list, cookie policy and the HTML sitemap live in src/app/root-elements. |
| /welcome/{role}/ | Five entry points by audience. The /welcome/ index repeats the homepage's five links. The role pages themselves provide distinct guidance. Source is in src/app/welcome. |
| /associazione/ | Governance, joining, people, partners and opportunities. /associazione/notizie/ is the association's own news and /associazione/dicono-di-noi/ collects external coverage. News cards use records from src/assets/notizie. The webmaster timeline is routed at /associazione/timeline/ and lives under organi-direttivi in the source. |
| /attivita/ | Entry point for events, courses, seminars, publishing, competitions and outreach. The overview and homepage both link to these areas. Detail pages use several patterns, including /attivita/eventi/histo26/, /attivita/trends25/ and /attivita/cryptowars/2021/. |
| /cifris25/, /cifris26/, /ixh25/, /fcir25/ | Short public addresses for event editions. CIFRIS is implemented under src/app/attivita/eventi/cifris. IXH and the top-level FCiR editions are under src/app/root-elements/hosting. FCiR24 is an exception at /cifris24/fcir24/. These addresses are part of past calls, programmes and links from partners. |
| /koine/ | Redirects temporarily to the current volume. /koine/articles-and-volumes/ lists the whole collection. /koine/volN/ opens an issue and /koine/volN/ARTICLE/ is a citation landing page. The templates are under src/app/attivita/editoria/koine, with article metadata in src/assets/articoli/koine. |
| /sitemap/ and /sitemap.xml | The HTML sitemap helps visitors browse. The XML sitemap is generated from prerendered pages. The same release script validates Koine and converts declared Angular redirects to Apache rules. |

## Source changes to make in small batches

1. **Give the main overviews distinct purposes.** Use the homepage as a short overview and Activities as the directory for finding current and past work. Review the repeated five links on /welcome/ before deciding whether its index earns a separate page. Keep the five role pages discoverable. Verify mobile access from the homepage and the primary menu.
2. **Put event files next to other event files.** The current hosting folder contains conference editions, a workshop and other one-offs. Move files into event families under the events feature when an edition is next updated. Leave the established public prefixes and direct links in place. Check the programme, proceedings and related downloads for the edition after each move. Put non-public references such as the [registration snapshot](components/registration/README.md) under Necromancer.
3. **Give recurring content one owner and one edit location.** Keep navigation and shell layout with the shared site components. Maintain a dated events archive and keep news and external coverage as separate views. In the editorial pilot, test structured records for date, title, source and optional image and alternative text. Let the main menu and HTML sitemap reuse the same directory entries where their purposes overlap.
4. **Review legacy files and URLs independently.** The components in src/app/archivio have no entries in the current Angular route table. Check module references and the baseline before deciding whether to retain them as historical references or remove them. A source move can keep the URL stable. Where a public page is consolidated, redirect directly to its replacement and verify the old address over HTTP. Preserve cited Koine paths, event archives, payment-result URLs and the webmaster timeline. Introduce an /en/ prefix as translated pages are published.

[Remaining Phase 1 work](01-remaining-work.md).
