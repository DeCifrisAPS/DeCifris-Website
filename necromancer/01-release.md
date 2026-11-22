# Phase 1 release candidate

The Necromancer branch contains a repaired Angular release. The candidate was built from the code at fe0cf55a1 and passed the original URL inventory on a local Apache 2.4 server. The public site is still on its previous deployment.

The checks below describe the initial candidate. Rebuild the latest branch before staging. The [remaining Phase 1 work](01-remaining-work.md) records the outstanding rollout checks and the next content, navigation and language improvements.

## Changes

- Restored the Cryptowars 2011 subpages, the historical Convegno UMI and regional sessions pages, and aliases with confirmed destinations. The association assets alias is exact so it does not swallow file URLs. Unknown pages and downloads return the existing styled 404 document with HTTP 404.
- Restored 212 legacy download URLs and updated 344 source link occurrences. Git confirmed identical historical blobs for 211 mappings, including the recovered Advisory Board manifesto. The remaining Bonavoglia poster matches the seminar name and date in its PDF metadata and is stored alongside the slides.
- Prerendered the previously missing Koine articles M14 and B00. Normalised title whitespace consistently for the browser title, citation metadata and BibTeX. The release generator validates that each Koine JSON article has generated HTML and citation metadata.
- Built the sitemap from the Angular prerender manifest. Legacy aliases, the test route, error pages and payment result pages are excluded from indexing. The historic CIFRIS23 registration page retains the fee information and displays a closed notice in place of the old payment form.

## Build and checks

Run npm ci in a fresh checkout and npm run build. Upload the contents of dist/DeCifris/browser, including the generated hidden .htaccess, when deploying to a compatible Apache host. The build uses the existing production workflow's default Angular configuration. Its postbuild step creates the sitemap and redirect rules from the prerender output, the Angular alias declarations and legacy-downloads.json.

The checked local candidate is available at dist/necromancer-phase1/browser. The previous browser output at dist/DeCifris/browser remains available for comparison and local restore.

- The normal npm run build entry point succeeded in a clean source copy with the workspace's installed dependencies. It prerendered 413 routes. Existing ngIf warnings from DecifrisAthesisComponent remain.
- Local Apache served all 1,091 baseline URLs with their expected response categories. All 405 canonical sitemap pages returned 200. All 279 legacy URLs returned 301 and kept query strings. All 212 recovered download targets returned file responses, with PDF signatures checked where applicable. Unknown page and file requests returned the styled 404 with HTTP 404.
- The three affected Koine articles served the expected titles and citation metadata. The CIFRIS23 archive rendered without the payment form. All four CIFRIS payment-result page URLs still served HTML with a sample query string. No transactions were submitted. The 274 external download references are recorded in the baseline and were outside the Apache pass.
- A local preview rollback restored the previous static browser output. The four sampled files served by the rollback matched the previously captured production checksums.

## Aruba rollout

1. Capture a restorable copy of the currently deployed files and the active host configuration before changing production. Keep the backup available to whoever performs the rollout.
2. Stage the complete browser output and check that Aruba permits the ErrorDocument, RewriteRule and RedirectMatch directives in the generated .htaccess. Reconcile any existing host-specific directives with the candidate configuration.
3. On staging, verify a canonical page, a case-sensitive legacy alias, a PDF with spaces in its filename, a missing URL, the sitemap and the public callback display routes. Verify the restore procedure using the Aruba backup.
4. Publish the staged browser output. Repeat the same smoke checks on the public domain and compare the deployed sitemap with the candidate. Restore the saved files and host configuration if the public checks fail.

Aruba staging access, the full host backup and live deployment are pending. Close Phase 1 after the live checks pass. Use that release as the baseline for the editorial pilot.
