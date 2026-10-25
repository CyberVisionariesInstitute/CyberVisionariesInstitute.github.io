# CVI Technology & Innovation Hub

CyberVisionaries Institute’s public technology hub for CyberFoundations, PKI, applied projects, and official resources.

Website: https://cybervisionariesinstitute.github.io/

## Hosting

Launch approved by Tonia Webster on October 25, 2026. GitHub Pages deploys the committed static files from `main`, repository root. HTTPS is enforced.

## Site structure

- Home, CyberFoundations, PKI, Projects, Resources, and About.
- Six CyberFoundations district pages with weekly project summaries: Welcome Center (Week 1), Foundry District (Weeks 2–4), The Grid & Cloud Heights (Weeks 5–7), Vault District (Weeks 8–9), City Hall & Registry (Weeks 10–11), and Broadcast Tower (Week 12).
- Instructors-only resource page links to a private repository. GitHub enforces existing repository permissions; no private teaching materials are included here.
- Custom 404 page.

## Editing and preview

Edit page content in `build.py` and district content in `modules.json`, then run `python3 build.py`. Commit the generated HTML with source changes. Edit `assets/site.css` for styling and `assets/site.js` for mobile navigation.

For local preview, run `python3 -m http.server 8000` in the repository and open http://localhost:8000/. Root-relative paths require a web server. No build dependencies are needed. Google Fonts has system-font fallbacks.

## Artwork

The City, Ivy, original PKI hero, and supplied Nova reference artwork are CVI assets. Homepage imagery includes an enhanced version of an existing CVI website pathway image. Projects, Resources, About, and instructor scenes use approved generated illustrations; About features Nova as mentor. District artwork combines existing Learning Lab and Capstone visuals with approved replacements for Welcome Center and Foundry District and an edited City Hall & Registry image.

## Learning applications

The public hub links to the CVI Learning Lab at https://learninglab.cybervisionariesinstitute.org. Existing applications, student data, cohort settings, and instructor repository permissions are managed separately.

## Validation

Desktop and embedded 390px mobile layouts, navigation, local links, image references, and anchors were reviewed during implementation. These checks do not establish full accessibility conformance or validate authenticated learning applications.

© 2026 CyberVisionaries Institute. All rights reserved. CVI branding, characters, original artwork, and content are not licensed for redistribution.
