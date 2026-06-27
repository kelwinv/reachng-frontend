## Why

The ReachNG homepage is an 8-section scroll-snap landing page, but only Section 01 (Hero) is fully implemented. Sections 02–08 exist only as heading placeholders in `page.tsx`, and several global component bugs prevent correct behavior across all sections. Without these sections, the marketing site cannot communicate the product value to potential supporters and NGOs.

## What Changes

- **Fix global bugs** in `HomePageHeader.tsx`, `Navigation.tsx`, and `page.tsx` scroll handler affecting all sections
- **Implement Section 02 — Sobre a ReachNG**: pink background, white card with 3-column layout
- **Implement Section 03 — ONGs que contribuimos**: card with 3 ONG thumbnails in a grid
- **Implement Section 04 — Como posso ser apoiador?**: 2-column layout with 2×2 cards + illustration
- **Implement Section 05 — Como posso cadastrar minha ONG?**: dark background + app screenshot
- **Implement Section 06 — Objetivo do aplicativo**: dark background + app screenshot + dot sidebar
- **Implement Section 07 — ONGs e Suas causas sociais e ambientais**: dark background + full-bleed image + dot sidebar
- **Implement Section 08 — Contato**: contact section with background images + dot sidebar
- **Add dark color token** `#0F1923` to `tailwind.config.ts` (needed by sections 05, 06, 07, 08)

## Capabilities

### New Capabilities

- `homepage-about-section`: Section 02 — pink background, white card with 3-column content (Quem somos, Como funciona, Por que escolher) and decorative elements. Figma: [node 46:55](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=46-55)
- `homepage-ongs-section`: Section 03 — white-gradient background, card with 3 ONG tiles (image + name + description). Figma: [node 28:328](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=28-328)
- `homepage-supporter-section`: Section 04 — white-gradient background, 2×2 step cards on the left + Team spirit illustration on the right. Figma: [node 49:144](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-144)
- `homepage-register-ong-section`: Section 05 — dark (`#0F1923`) background, app screenshot + decorative character. Figma: [node 49:337](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-337)
- `homepage-objective-section`: Section 06 — dark background, app screenshot, right dot-control sidebar. Figma: [node 49:375](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-375)
- `homepage-ongs-causes-section`: Section 07 — dark background, full-bleed image, right dot-control sidebar. Figma: [node 49:412](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-412)
- `homepage-contact-section`: Section 08 — contact layout with background images, right dot-control sidebar. Figma: [node 49:442](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-442)
- `homepage-global-fixes`: Bug fixes to `HomePageHeader.tsx` (dead import, missing dark variant), `Navigation.tsx` (white color for dark sections), `page.tsx` (scroll handler covering all 8 sections, correct header variant per section), and `tailwind.config.ts` (add `bg-dark` token for `#0F1923`)

### Modified Capabilities

(none — no existing spec-level behavior is changing)

## Impact

- **Files modified**: `src/app/page.tsx`, `src/components/Home/HomePageHeader.tsx`, `src/components/Home/Navigation.tsx`, `tailwind.config.ts`
- **Files created**: `src/components/Home/AboutSection.tsx`, `OngsSection.tsx`, `SupporterSection.tsx`, `RegisterOngSection.tsx`, `ObjectiveSection.tsx`, `OngsCausesSection.tsx`, `ContactSection.tsx`
- **Assets needed**: `public/images/team-spirit-amico.svg`, `app-screenshot-register.png`, `app-screenshot-objective.png`, `ongs-causes-bg.png` (to be exported from Figma or provided by the product team)
- **No backend, API, or dependency changes** — purely frontend/UI work
