# Phase 1 remaining work

The current branch has passed the 1,091-URL local Apache check. The remaining release work concerns Aruba. The improvements below can be picked up in small, independently testable batches.

## Release work still open

- [ ] **Confirm Aruba access and capture a full backup.** Save the current public files and the active host configuration, including redirects and error handling. The local rollback matched four production files. Rehearse restoration using the Aruba backup on staging.
- [ ] **Stage the latest branch build.** Run the normal build and stage the complete browser output, including the generated .htaccess. Verify Apache support for the required directives, the true 404 response, redirect query strings and file names with spaces. The earlier candidate documented in the [release report](01-release.md) predates the sidebar and content cleanup.
- [ ] **Publish and check the public site.** Compare the public sitemap with the staged output. Verify representative direct links, Koine article metadata and PDFs, the webmaster timeline, the 404 recovery links, and the public payment-result routes. Confirm ownership of any active external integration and check a sample of the external downloads listed in the [baseline](01-live-baseline/README.md), including Koine PDFs and membership forms. Record failures and the release version, then use the deployed release as the editorial pilot baseline.

## Priority fixes for content and access

### 1. Make Editoria a short publications hub

- [ ] Keep clear links to Koine and the two Aracne series. Keep the Cento Tesi pages as the destinations for each edition. Review the 2017–2024 page and confirm whether its call is open, closed or superseded before changing the status shown on the hub.
- [ ] Remove the Koine volume cards from the Editoria inventories and use the Koine volume index as their shared destination. In particular, the current “Libri in preparazione” panel links to the published volume 4. Keep a compact selection of non-Koine books with publisher links where those links add something readers cannot find in Koine.
- [ ] Replace the repeated placeholder covers with compact text links where a cover adds no information. Correct the Cento Tesi 2017–2024 alternative text, which currently says 2014–2023. Give each public item one maintained title and status.

### 2. Make important pages easy to reach

- [ ] Define one list of main destinations shared by the toolbar and the mobile menu. Give Koine a direct path from the mobile homepage. Align the Association menu so Advisory Board and Affiliates and Partners can both be found on desktop and mobile. Keep section-specific menus for conference programmes, volumes and other local navigation.
- [ ] Give desktop dropdowns an explicit keyboard and touch control. Some currently open on hover, and several menu links use aria-labelledby values without matching IDs. Use descriptive labels and expose expanded state. Check Tab, Enter, Escape and focus return.
- [ ] Add a skip link to a consistent main-content target. Review heading order, focus indicators and contrast on the homepage, Editoria, an article, a conference page and the 404 page. Check those pages at 320 px and with browser zoom. Verify that the bottom bar and drawer leave the focused control visible.
- [ ] Simplify the HTML site map to the main public destinations and archives. Fix the second Cento Tesi entry, which currently points to the 2008–2017 page. Reuse navigation data for the site map where practical. Keep the XML sitemap generated from the published pages.

### 3. Introduce English in a small first release

- [ ] Keep the current Italian URLs and provide stable English URLs for the homepage, About and membership, Contacts, Editoria and the events overview. Give both versions the same recognisable set of main destinations. Start with a language switch that opens the equivalent page when available and makes the fallback explicit otherwise.
- [ ] Split the existing bilingual membership instructions by language once both URLs are available. Correct the document and content language on pages that already contain English. Keep Koine articles, older event programmes and legal documents in their published language and identify that language where useful.
- [ ] Translate menu labels, the 404 recovery links and page metadata alongside the first batch. Add language alternate links only for real page pairs. Test direct visits, language changes and valid links in both directions. Store translated labels and content so the editorial pilot and eventual static build can reuse them.

### 4. Review further consolidation with evidence

- [ ] Check which overview pages duplicate their menu or the homepage. Start with the Welcome and Activities entry points. Keep an overview where it provides a useful introduction or helps users choose a destination. Where an overview only repeats links, move the links into the nearest useful hub and keep a direct redirect for any genuine public replacement.
- [ ] Review historical conference calls and committees in batches. Preserve programmes, proceedings, distinct workshop records, stable Koine article and DOI destinations, and the webmaster timeline at /associazione/timeline/. Keep canonical internal links and retire further aliases only when their history and current references support it.
