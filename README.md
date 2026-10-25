# CVI Technology & Innovation Hub — unpublished draft

Six-page GitHub Pages website for CyberVisionaries Institute.

## Review status

- Unpublished draft source uploaded to the private CVI hub repository. GitHub Pages is not enabled.
- Repository: `CyberVisionariesInstitute/CyberVisionariesInstitute.github.io`.
- Existing repositories and Lovable applications were not modified.
- Excluded repositories: cyberfoundations-simulators, cyberfoundations-instructor-demo, from-the-grid-to-cloud-heights, cvi-demo-lab, cvi-learn-hub.
- Original City, Ivy, PKI, and supplied Nova images reused. No replacement artwork generated.
- Official user-supplied Black Logo.png integrated in header and footer without changing the source image.
- Student-facing Learning Lab: https://learninglab.cybervisionariesinstitute.org — linked in navigation and resources. Existing Learning Lab access controls remain unchanged.

## Preview

Run `python3 -m http.server 8000` from this directory and open http://localhost:8000/.
Opening index.html directly as a local file will not resolve the root-relative paths.

## Pages

Home, /cyberfoundations/, /pki/, /projects/, /resources/, /about/, and 404.html.

## Editing

Edit page content in build.py, then run `python3 build.py`.
Edit assets/site.css for design and assets/site.js for mobile navigation.
No dependencies are required to build. Google Fonts is optional at runtime; system font fallbacks are supplied.

## Publication gate

No automatic deployment workflow is included. Do not enable GitHub Pages until Tonia approves publication.
The generated root index.html and page directories are ready for organization-root hosting.
Do not overwrite existing repositories, rename program repositories, change permissions, or migrate learning applications.

## Validation performed

- All seven page documents have one H1.
- 88 local links, assets, and anchors resolved.
- JavaScript syntax checks passed.
- Home and CyberFoundations desktop navigation reviewed in browser; PKI desktop hero reviewed.
- Home, CyberFoundations, and PKI reviewed at 390px using embedded viewport frames.
- Mobile menu open state verified; Escape-to-close implemented.
- Clipped mobile CyberFoundations heading corrected and visually rechecked.
- Full accessibility conformance and authenticated learning flows are not claimed.

## Asset provenance

City, Ivy, and PKI: original asset records in CVI Learning Lab, project b68222a1-335a-445a-ae52-4a8df5bd00b5.
Nova: user-supplied Nova Avatar Final.png and Nova at the office.gif. The supplied .gif contains one PNG frame.
WebP copies retain the source appearance with browser-side object-fit crops. Original source images are retained alongside the source package.

© 2026 CyberVisionaries Institute. All rights reserved. CVI branding, characters, artwork, and content are not licensed for redistribution by this package.

## Homepage direction
The homepage introduces the institute and both pathways with CVI branding. CyberFoundations City artwork is confined to /cyberfoundations/. No City artwork is used on Home or Projects.

## Immersive homepage revision
Reference-informed art direction: original Nova studio portrait in a cinematic CVI welcome, editorial typography, illustrated navigational destinations, and restrained hover depth. All character and program art is original CVI material. City map remains exclusive to the CyberFoundations section. The resource desk uses HTML/CSS book motifs, not replacement artwork.

## Cybersecurity hierarchy
Homepage headline explicitly names cybersecurity. Nova is a small supporting guide portrait, not the hero background; mobile copy appears before her portrait.

## Website-sourced homepage imagery
Homepage hero: existing CVI pathway-guidance artwork. Destination panels reuse existing website Cyber Foundations teaching, homepage pathway session, and portfolio mentorship images. Sources: https://cybervisionariesinstitute.org/ image elements, original files retained without alteration. Nova remains on the CyberFoundations page. No new bitmap artwork generated.

## Enhanced pathway artwork
At Tonia’s request, the existing website pathway landscape was enhanced with the built-in image editor: sharper terrain, controlled illuminated paths, atmospheric depth, and refined sunrise lighting. Original website image retained as website-pathway-guidance-full.webp; edited display copy is pathways-enhanced-v2.webp. Original composition, five signs, and silhouette retained.

## Program section refinement
CyberFoundations: original City hero and full map, six anchored district descriptions, original Nova/Ivy introductions, portfolio resource, and authenticated Learning Lab handoff. PKI: original hero, three-phase progression, evidence-focused capability overview, official repositories, and authenticated program handoff.
Validation: desktop and 390px mobile program heroes reviewed; all 114 local references and anchors resolve; original artwork invariants checked; one H1 per page.


### Approved section illustrations
Projects, Resources, and About use new AI-generated illustrations approved by Tonia, created with the built-in image tool. Prompts: hands-on cybersecurity engineers and network hardware; digital technical research library; adult mentorship and collaborative cybersecurity learning. Shared art direction: cinematic editorial illustration, navy/teal, warm rim light, restrained purple/pink, wide composition with headline space, no logos or text. Assets: `projects-hero-v1.webp`, `resources-hero-v1.webp`, `about-hero-v1.webp`. Original program artwork remains preserved.

Instructor access: `/instructors/` is a navigation page, not an authenticated area. It links to the private `cyberfoundations-labs` repository. GitHub enforces existing access; no instructor contents are copied into the hub. Student-facing portfolio and Learning Lab links remain separate.

Instructor page illustration: `instructors-hero-v1.webp`, created with the built-in image tool. Prompt: professional Black woman cybersecurity instructor preparing a lesson with network hardware and abstract network teaching board, navy/teal cinematic editorial style, warm lighting, wide framing and headline space; no logos or readable text.

About hero v2: original Nova portrait used as identity reference in an image-tool edit of the approved About illustration. Nova is seated beside the mentor in the group; original illustration and portrait preserved. Current asset: `about-hero-nova-v2.webp`.
