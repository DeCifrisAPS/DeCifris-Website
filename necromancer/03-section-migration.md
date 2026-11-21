# Phase 3 - Migrate section by section

Move to shared static templates in Astro after the pilot succeeds. Keep existing public content languages. Use the repaired site as the baseline for URLs, content and appearance.

## 3.1 - Audit components and establish a visual baseline

Capture representative desktop and mobile views of the homepage, a news or event page, a long institutional page and a Koine article. For the components used by each section, document the job they do. Merge repeated layouts into a shared template, replace simple widgets with native HTML or CSS, and retire unused components once their routes and references are accounted for. Keep client-side code for behaviour that requires it.

**Done when.** The team has a short list of shared layouts and a record of the interactions each section needs to preserve.

## 3.2 - Build and review one static slice

Preview one news page and one event page from approved content using Astro, semantic HTML and shared CSS. Carry over the De Cifris logo and palette from `src/styles.css`, starting with teal `#307580`, pale aqua `#e6f4f1` and orange `#ff8d3d` where contrast permits. Preserve recognisable elements where they serve the page. Change spacing, typography, navigation and layout wherever legibility or usability improves. Give real content and navigation priority over decorative badges, repeated card grids, gradients and generic promotional copy.

**Done when.** The team reviews screenshots with real content on narrow and wide screens, checks keyboard navigation and contrast, and confirms that ordinary content pages render without a client-side framework. Compare page weight with the Angular baseline before expanding the new layout.

## 3.3 - Release news, then events, then institutional pages

Switch one verified batch at a time. Begin with news, then use the event template for one current or archived event. Expand to the rest of the event pages and institutional pages once those two patterns are working. Keep the remaining Angular sections serving their existing paths during the transition.

**Done when.** Each batch is deployable on its own, direct links and downloads work, approved redirects lead to the intended page, and the previous deployment can be restored.

## 3.4 - Migrate Koine in two passes

Generate listings, volume pages and article HTML from the existing JSON. First compare a representative volume and its articles with the existing display. Carry forward any editorial material missing from JSON. Then generate the complete archive and verify all known Koine routes and PDF links before publishing it.

**Done when.** The deployed archive preserves article URLs, DOI targets, author order, affiliations, ORCIDs, citation metadata in the served HTML, BibTeX, and original and revised PDF links.

## 3.5 - Move the remaining interactions

Confirm which registrations, payment hand-offs, forms and interactive archives are still in use. Verify each flow independently and keep it on Angular until its replacement passes. Use the payment provider's test environment for any active payment flow. Archive closed flows with a clear status.

**Done when.** Each retained interaction passes its checks on the replacement route and can be restored if needed.

## 3.6 - Remove the Angular deployment dependency

After the final routes have moved, remove the old deployment dependency and document the build, release, rollback and editorial workflows. Use a fresh checkout to verify that another maintainer can run the build and find the template or content source for a representative page.

**Done when.** A new release can be built and deployed without Angular, common page changes use shared templates, and the team can maintain the site within the existing budget.
