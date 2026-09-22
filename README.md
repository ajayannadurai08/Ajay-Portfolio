# A. Ajay — QA Engineer Portfolio (Inspection Report edition)

A completely different visual direction from the first version: the whole
page is styled like an actual QA inspection / test-case report rather than
a typical dark SaaS-card portfolio.

## Concept
- Warm charcoal + copper palette (not black-and-neon-green)
- Space Grotesk (headings/body) + IBM Plex Mono (data, labels, report fields)
- Document header with a report number, revision, and live status
- Skills shown as a checklist table (icon, tool, category, proficiency dots)
- Projects shown as "Test Case Reports" (TCR‑01, TCR‑02) with a PASS-style
  badge and a defect table with severity-coloured left borders
- Experience shown as a revision-history table
- Contact styled as a document sign-off block
- One deliberate animation only: the "VERIFIED" stamp on the profile photo
  stamps in on load. Nothing else animates — the page reads like a printed
  report, on purpose.

## Files
- `index.html` — markup
- `style.css` — the report theme
- `script.js` — active nav-link highlighting only
- `profile.png`, `resume.pdf` — your assets, unchanged

## Publish on GitHub Pages
1. New public repo (e.g. `qa-portfolio`).
2. Upload all files from this folder to the repo root.
3. Settings → Pages → Deploy from a branch → `main` / `/root`.
4. Save, open the generated URL.
