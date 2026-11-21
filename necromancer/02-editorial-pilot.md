# Phase 2 - Pilot editorial publishing

Give the secretariat a way to make routine corrections and create pages from templates. An association editor reviews and publishes the result without involving the webmaster in individual edits.

## 2.1 - Test the templates with the secretariat

Set up an association-owned Google Drive workspace. Prepare **News** and **Event** templates in Docs for headings, paragraphs, lists and links. Use Sheets for titles, dates, affiliations, links and review status. Give the secretariat draft access and reserve approval access for association editors.

**Done when.** A secretary can update a date and affiliation and prepare an event from a template using draft copies.

## 2.2 - Preview and approve a snapshot

Use Apps Script to validate required fields and capture the exact Doc and Sheet row being submitted. Make that snapshot available in a private preview. An editor approves the snapshot. Subsequent edits create a new draft and require another approval.

**Done when.** The preview matches the approved snapshot, drafts stay private and secretary access cannot approve a submission.

## 2.3 - Build the pilot pages in staging

Read approved snapshots at build time and render both pilot cases in the repaired site. Use the same rendering logic for previews and publication. Confirm automated access to Aruba and verify that publishing, storage and Apps Script quotas fit the zero-new-spend target. Keep credentials under association control. [Google Apps Script quotas](https://developers.google.com/apps-script/guides/services/quotas)

**Done when.** A staging release contains the approved edits, failed validation or builds preserve the current live version, and the editor sees an actionable error message.

## 2.4 - Publish and reverse a real edit

Have the secretary prepare one correction and one new templated page. Have the editor review and publish both through the pilot workflow. Restore an earlier approved revision in staging and record the recovery procedure.

**Done when.** Both changes reach the live site without webmaster intervention, and an editor can recover the previous approved version.
