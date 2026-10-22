# Phase 6: Audit

## Automated results
- axe-core (WCAG 2.0/2.1 A and AA plus best practice) at 375px and 1440px: 0 violations, also with the mobile menu open.
- html-validate on index.html: no errors.
- Headless Chromium at 375, 768, 1024 and 1440px: no console errors, no failed requests, no horizontal overflow.
- Interactions verified: menu open/close and Escape, filter, checkboxes, progress bar, persistence after reload, reset, skip link first in tab order, page usable with JavaScript disabled.

## Issue found and fixed
- A font `<link rel="preload">` raised a CORS console error when opening the file directly (file://). Removed; fonts load through `@font-face`.
- Hero layout was cramped on desktop; rebalanced text and illustration widths.

## Requirement checklist (from the brief)
| Brief requirement | Where |
|---|---|
| HTML, CSS, basic JavaScript, no frameworks | index.html, style.css, script.js |
| Responsive layout, clean user-friendly UI | all breakpoints tested |
| Semantic landmarks header, nav, main, article, footer | index.html |
| CSS Grid for macro layout | `body` grid and named lines in style.css section 4 and 14 |
| Flexbox for micro components | header bar, nav, chips, cards, check rows, footer |
| Mobile-first, min-width queries, Tablet 768px, Desktop 1024px | style.css sections 13 and 14 |
| clamp() for fluid typography | `--step-0` to `--step-3` |
| Palette: Mocha Mousse #A5856F, Ethereal Blue #A0D4E0, Moonlit Grey #F2F0EA | `:root` tokens |
| Max 2 font families, 3 weights; Montserrat headlines, Open Sans body | `@font-face` (400/600/700) |
| Warm, grounded 2025 aesthetic | palette, rounded surfaces, soft shadows |
| WCAG adherence | axe clean, focus rings, 44px targets, labels, reduced motion |
| Roadmap: Discovery, Wireframe, Semantics, Style, Logic, Audit | docs/ and the six roadmap cards |
| Logic: state and interactivity | script.js |
| Audit: LCP/CLS and accessibility | this file (accessibility measured; LCP/CLS not formally profiled) |
