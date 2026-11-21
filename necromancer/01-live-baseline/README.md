# Step 1.1 - Live site baseline

Recorded on 21 November 2026 against the public De Cifris site and site source at `80398ddd6`. The local build used for comparison was already present in `dist/DeCifris/browser`. These measurements describe the site before the fixes on the Necromancer branch.

## Coverage

The [URL inventory](live-url-inventory.tsv) contains 1,091 distinct same-origin paths. It combines the Angular route tree, internal links extracted from prerendered navigation and page content, `src/routes.txt`, the source and live sitemaps, the existing local build, Koine JSON and download files in `src/assets`. Page paths are grouped by path without the trailing slash. Checks requested the trailing-slash form for pages and aliases and the file path for downloads. The inventory records the expected title, redirect target or file response alongside the observed HTTP status, final URL and title or media type.

| URL type | Checked | Result |
| --- | ---: | --- |
| Pages | 407 | 404 matched their expected title and URL. Two Koine articles returned the homepage and one title differed in whitespace. |
| Legacy aliases | 55 | All 55 need HTTP redirect review. |
| Same-origin downloads | 616 | 404 returned an expected file response. 212 returned HTML with the homepage title. |
| Unclassified links | 12 | Each needs a destination or retirement decision. |
| Missing-page control | 1 | The host returned the homepage with HTTP 200. |
| **Total** | **1,091** | All inventoried same-origin paths were checked. |

Aruba throttled the initial pass. A slower follow-up completed the remaining 317 checks. The deployed sitemap matched the repository copy byte for byte and contained the same 88 distinct paths after trailing-slash normalisation.

The checks used direct HTTP responses without executing Angular. PDF checks looked for the PDF signature in the first bytes. Other download checks distinguished file responses from HTML and did not verify the integrity of entire files. The [external download references](external-downloads.tsv) list 274 source-to-download references, including Koine articles and volumes. Their availability was outside this HTTP pass.

## Repair priorities

1. **Restore the membership privacy form in step 1.3.** The Benefactors membership page links to `/assets/associazione/Informativa_privacy.pdf`, which returned homepage HTML. The repository has a corresponding file at `src/assets/pdf/associarsi/Informativa_privacy.pdf`. Verify the intended document before changing the link. Group the other 211 failed download paths by section and check whether an equivalent file already exists under the current asset layout.
2. **Fix confirmed alias targets in step 1.2.** The Taurinorum and Schola Latina aliases returned homepage HTML. The lower-case canonical paths both returned their expected pages. The branch corrects the Angular targets and the separate rendered link to `/attivita/deCifris-scholalatina`. Both aliases and the rendered seminar link passed a local Chrome check after a fresh build. HTTP redirects on Aruba remain to be configured and verified.
3. **Review other legacy paths in step 1.2.** Eight immediate alias targets are absent from the known route tree, including three Cryptowars 2011 subpages and the two aliases above. Two further aliases point to other declared redirects. Locate archived material before choosing destinations. Some aliases may resolve after Angular starts even when a direct HTTP request returns homepage HTML. Check true HTTP 404 handling alongside redirects. The missing-page control returned HTTP 200.
4. **Reconcile Koine and sitemap coverage in step 1.4.** The deployed sitemap covers five of 272 paths derived from the Koine JSON and omits volume 10 and its articles. Volume 10 and article H01 served the expected HTML. Direct requests for `/koine/vol1/M14/` and `/koine/vol6/B00/` returned the homepage. The title on `/koine/vol3/E04/` differs from its JSON by whitespace at a sentence boundary. Check prerender inputs and the generated HTML for all three.

## Restore candidate

The existing local browser output is dated 20 November 2026. The four sampled files matched the public HTTP responses byte for byte. It is a candidate for restoring the static files. Obtain a restorable copy of the full Aruba deployment, including host-level redirects and error configuration, and verify the restore procedure before changing production. The branch build was written to a separate temporary directory so the existing local artifact remains available.

| Local file under `dist/DeCifris/browser/` | SHA-256 |
| --- | --- |
| `index.html` | `bf454fb9693b366f62607642471a8c819e232bc000d027a0a1807592d37a0a0c` |
| `main.js` | `cc5fa6a619b89de1f85a6c33ba4c94eb1f6b44bdcd783a2ff333226c6299a2ce` |
| `koine/vol10/index.html` | `e5ffc4469acd48aa34bc461aa8d6d923eb9bc64e3d2ae7e1401c544bbe727d6c` |
| `koine/vol10/H01/index.html` | `3509cf13928be8d8e22eb9bb93c9019bbd8b961ddf8e565d1d4dfaab7d7655ca` |
