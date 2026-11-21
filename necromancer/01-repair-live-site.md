# Phase 1 - Repair the live site

Deliver a repaired Angular release on the existing host. Make each batch of repairs small enough to verify and release independently.

## 1.1 - Record the live baseline

Build a URL inventory from navigation, Angular routes, prerender inputs, the sitemap and Koine JSON. Include public downloads. For each URL, record the expected page, redirect or error, and check what the host serves. Check the page title or a distinctive piece of content alongside HTTP status.

**Done when.** The team has a prioritised repair list, a baseline for later migration and an identified deployment it can restore.

[Baseline, URL inventory and repair priorities](01-live-baseline/README.md). The remaining live checks and restore confirmation are recorded there.

## 1.2 - Fix navigation and legacy aliases

Start with unwired pages, broken internal links and redirect targets. Compare the legacy Taurinorum and Schola Latina aliases with their declared route casing. Repair a small batch, then verify those URLs directly on the host. Use a permanent redirect where an obsolete URL has a genuine replacement.

**Done when.** Corrected links reach the intended page, and missing URLs produce the intended error response. A generic HTTP 200 page fails when the URL should serve specific content.

## 1.3 - Recover useful pages and downloads

Restore missing material where an authoritative copy exists. Keep useful historical pages on their existing URLs and label closed events as archived. Record any decision to retire a page or download so it can be reviewed before release.

**Done when.** Every URL in the batch has a verified outcome and retained downloads open successfully.

## 1.4 - Reconcile the sitemap and Koine

Use a shared inventory for sitemap generation and publication. Include canonical public pages and exclude aliases. Check the Koine volume 10 listing, article links, citation metadata and sitemap coverage.

**Done when.** The deployed sitemap includes the repaired canonical URLs, and direct requests serve the expected volume and article HTML.

## 1.5 - Close the repair phase

Record which batches were released, compare them with the baseline and verify the rollback procedure on a preview copy. Start the editorial pilot from this release.

**Done when.** The team has a verified live release, a concise record of changes and a known deployment to restore.
