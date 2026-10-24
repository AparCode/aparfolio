# Aparfolio

A two-mode static portfolio. No package installation or build step is needed.

## Preview

Run `python -m http.server 4173 --bind 127.0.0.1` from this directory, then open http://127.0.0.1:4173. You can also open index.html directly.

## Update content

- `data.js`: existing project descriptions, links, skills, experience, and music tracks.
- `app.js`: shared renderers, mode introductions, and music skill groups.
- `style.css`: centralized color tokens, responsive layout, and reduced-motion rules.
- `images/`: supplied branding, optimized portrait, and project artwork.
- `resume.pdf`: supplied resume. Replace this file to update it.

Tech is the default on every page load. The navigation switch changes all five sections, supports native button keyboard/touch behavior, and reports its state to assistive technology. No audio or video loads automatically. Music links open YouTube.

## Design and sources

The two supplied Figma PDF exports guide the divided navigation, Tilt Neon display typography, left introduction, rounded right portrait, and blue/plum themes. Tilt Neon matches the font specified by the creator for the Figma mockups, using its regular weight for branding, navigation, and display headings. The existing purple A icon is retained.

Reviewed all three supplied archives: the legacy HTML site, the basic HTML/CSS/JS site, and the launchpad prototype. The current workspace is an expanded basic implementation, so its centralized content remains intact. Source descriptions and dates are retained without adding achievements. References and a pre-edit backup are in `reference/redesign/` (ignored by Git).

The PDFs contain homepage designs only. Below-the-fold sections and mobile adaptation extend that design. No music CV or separate music portrait was supplied; the same portrait is used and resume access belongs to Tech mode. External destinations are retained from the supplied content; their live availability is not guaranteed.

This is a local review version; it has not been deployed. Upload the root HTML/CSS/JS, images directory, and resume.pdf to any static host. Do not deploy the reference directory.

## Validation
JavaScript syntax checks passed. Browser review covered desktop (1440px) and mobile (390px), keyboard mode switching, fresh-load Tech default, project expansion, image loading, section targets, and console errors. No external link availability audit was performed.


Music catalog refreshed from the public Illumidove Videos page on October 22, 2026: 16 uploads, newest first. This is a curated static list; new YouTube uploads must be added to MUSIC_TRACKS in data.js.

Video captions adapted from the creator-written YouTube descriptions on October 22, 2026. Captions retain first-person production stories and are shortened for the portfolio; source descriptions are saved locally in reference/redesign/youtube-descriptions.json.

Tech projects now follow Tech-Projects-Page.pdf: all 19 projects, five category filters with computed counts, rounded outlined cards, and keyboard-accessible detail dialogs. Verified all filters, Enter/Escape dialog behavior, 390px mobile layout, and preservation of all 16 Music entries. Assets use a version query to refresh older browser caches.


## Tech projects layout

The Tech collection follows Tech-Projects-Page.pdf: a large Tilt Neon heading, counted category filters, and three columns of rounded blue-outline cards. Cards open a keyboard-accessible detail dialog. The grid becomes two columns on tablet and one on mobile. All 19 projects remain available; Music mode keeps its 16 tracks. Verified all five filter counts, keyboard dialog opening and Escape/focus return, mode switching, and desktop/mobile layout (1440px and 390px).
