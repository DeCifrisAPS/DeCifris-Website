# Step 1.1 - Live site baseline

Recorded on 21 November 2026 against the public De Cifris site and site source at `80398ddd6`. The local build used for comparison was already present in `dist/DeCifris/browser`.

## Coverage

The [URL inventory](live-url-inventory.tsv) contains 1,091 distinct same-origin paths. It combines the Angular route tree, internal links extracted from prerendered navigation and page content, `src/routes.txt`, `src/sitemap.xml`, the existing local build, Koine JSON and download files in `src/assets`. Page paths are grouped by path without the trailing slash. Checks requested the trailing-slash form for pages and aliases and the file path for downloads. The inventory records the expected title, redirect target or file response alongside the observed HTTP status, final URL and title or media type.

| URL type | Inventoried | Checked | Result |
| --- | ---: | ---: | --- |
| Pages | 407 | 115 | All 115 matched their expected title and URL. |
| Legacy aliases | 55 | 34 | All 34 need redirect review. |
| Same-origin downloads | 616 | 616 | 404 returned an expected file response. 212 returned HTML with the homepage title. |
| Unclassified links | 12 | 9 | Nine need a destination or retirement decision. |
| Missing-page control | 1 | 0 | Recheck when the host permits it. |
| **Total** | **1,091** | **774** | **317 remain unchecked.** |

The checks used direct HTTP responses without executing Angular. PDF checks looked for the PDF signature in the first bytes. Other download checks distinguished file responses from HTML and did not verify the integrity of entire files. The [external download references](external-downloads.tsv) list 274 source-to-download references, including Koine articles and volumes. Their availability was outside this HTTP pass.

The host began returning HTTP 429 during the checks, and a low-volume follow-up still received 429. The table excludes throttled responses. A fresh comparison with the deployed sitemap and the remaining URLs is pending. Treat the local sitemap column as repository evidence.

## Repair priorities

1. **Restore the membership privacy form in step 1.3.** The Benefactors membership page links to `/assets/associazione/Informativa_privacy.pdf`, which returned homepage HTML. The repository has a corresponding file at `src/assets/pdf/associarsi/Informativa_privacy.pdf`. Verify the intended document before changing the link. Group the other 211 failed download paths by section and check whether an equivalent file already exists under the current asset layout.
2. **Fix confirmed alias targets in step 1.2.** The Taurinorum and Schola Latina aliases returned homepage HTML. The lower-case canonical paths both returned their expected pages. Fix the mixed-case targets and the separate rendered link to `/attivita/deCifris-scholalatina`. Check both direct links and browser navigation.
3. **Review other legacy paths in step 1.2.** Eight immediate alias targets are absent from the known route tree, including three Cryptowars 2011 subpages and the two aliases above. Two further aliases point to other declared redirects. Locate archived material before choosing destinations. A homepage response from a legacy URL is evidence of a missing HTTP redirect. Some valid aliases may still resolve once Angular executes in the browser.
4. **Reconcile Koine and sitemap coverage in step 1.4.** The source sitemap covers five of 272 paths derived from the Koine JSON. It omits volume 10 and its articles. Direct checks during the planning review returned the expected HTML for volume 10 and article H01. Use the JSON inventory to check canonical article and volume entries against the generated and deployed sitemaps.
5. **Complete the comparison before sign-off.** Use the inventory to finish the unchecked URLs in small batches. Verify the missing-page status and compare the deployed homepage, asset bundle and sample Koine pages against the restore candidate.

## Restore candidate

The existing local browser output is dated 20 November 2026 and includes the homepage, the main Angular bundle and prerendered Koine pages. Treat it as a candidate pending live byte comparison and confirmation of Aruba backups and deployment access. Obtain a restorable copy of the actual deployed files, including host-level redirects and error configuration, before a production change. Keep the current release instructions with that copy.

| Local file under `dist/DeCifris/browser/` | SHA-256 |
| --- | --- |
| `index.html` | `bf454fb9693b366f62607642471a8c819e232bc000d027a0a1807592d37a0a0c` |
| `main.js` | `cc5fa6a619b89de1f85a6c33ba4c94eb1f6b44bdcd783a2ff333226c6299a2ce` |
| `koine/vol10/H01/index.html` | `3509cf13928be8d8e22eb9bb93c9019bbd8b961ddf8e565d1d4dfaab7d7655ca` |
