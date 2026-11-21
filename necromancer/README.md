# Project Necromancer

Repair the live De Cifris website, give the secretariat an editorial workflow in Google Docs and Sheets, and migrate the public site in independently releasable sections. The web team owns templates, navigation, hosting and integrations. The secretariat prepares content and an association editor reviews and publishes it.

## Baseline

The Angular 18 application has 225 component templates. Dates, programmes and other content are often embedded in HTML components. Angular routing, prerender inputs and the sitemap are maintained separately. The repository README describes a manual build and upload. Express renders Angular and serves files, with no application API defined in the Express entry point. The code also includes Nexi payment integrations, a Google Forms submission service and interactive archives. CIFRIS26 registration is closed in the current template, and the current mailing-list page provides contact and membership information.

Koine has nine volume JSON files under `src/assets/articoli/koine/`. They drive article pages, bibliographic metadata and BibTeX. Volume pages and the listing still use separate Angular templates. During the 21 November 2026 review, live checks returned HTTP 200 for `/koine/vol10/` and `/koine/vol10/H01/`. The article title was present in the served HTML. The sitemap generator had no entry for volume 10.

The live host responded through Aruba. The checkout had about 859 MiB of assets, including four files above the Cloudflare Pages 25 MiB per-file limit. Confirm the Aruba plan, publishing access and backups before committing to an automated deployment. The budget target is zero new recurring spend using existing domain and hosting arrangements. [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/)

## Phases

1. [Repair the live site](01-repair-live-site.md) and publish a verified Angular release with a rollback copy.
2. [Pilot editorial publishing](02-editorial-pilot.md) with a routine correction and a page created from a template.
3. [Migrate section by section](03-section-migration.md) to shared static templates while preserving URLs, Koine and active integrations.

## How the work is divided

Each phase is split into numbered substeps with a concrete completion check. Finish discovery and staging work before publishing the smallest useful batch. Keep a known version to restore whenever a substep changes the live site.

The target is a lightweight site another maintainer can build and understand from a fresh checkout. Use shared page templates, semantic HTML and a small set of styles derived from the existing De Cifris palette. Review real mobile and desktop pages with the team. Keep visual elements that help readers recognise or use the site and simplify components wherever their job can be done by the browser or a shared template.

## WordPress

WordPress has a visual block editor, including on WordPress.com's free tier. WordPress.com requires a paid plan to connect `decifris.it` and install plugins. Self-hosted WordPress is free software and could fit the budget if the existing Aruba plan includes supported PHP and a database. It would also require updates, backups and a Koine integration. The pilot starts with Docs and Sheets because the secretariat already uses them. Revisit self-hosted WordPress if the pilot shows that editing or preview is too cumbersome. [WordPress.com free editor](https://wordpress.com/free/). [WordPress.com plans](https://wordpress.com/pricing/). [Self-hosting requirements](https://wordpress.org/about/requirements/)
