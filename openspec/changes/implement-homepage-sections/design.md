## Context

The ReachNG homepage is a single-page app (`src/app/page.tsx`) built on Next.js 13 App Router with a full-screen scroll-snap layout. Each of the 8 sections occupies 100vh and is snapped to by the native CSS scroll-snap mechanism. A fixed left navigation (`Navigation.tsx`) shows the current section number, and a fixed header (`HomePageHeader.tsx`) adapts its visual style to the active section background.

Currently:
- Section 01 (Hero) is fully implemented in `MainSection.tsx`.
- Sections 02–08 exist only as `<section>` wrappers with a heading placeholder in `page.tsx`.
- The scroll handler only iterates sections `[0,1,2,3,4]` instead of `[0,1,2,3,4,5,6,7]`.
- `HomePageHeader.tsx` has a dead import (`import { type } from "os"`) and only handles two visual variants (default / light), missing the dark variant needed for sections 05–08.
- `Navigation.tsx` sets white text only for section index 1; it should also apply for sections 2, 5, 6, 7 (dark/pink backgrounds).

## Goals / Non-Goals

**Goals:**
- Implement the 7 missing page sections (02–08) as standalone React components under `src/components/Home/`
- Fix the 5 identified bugs in global components and the scroll handler
- Add the `bg-dark` (`#0F1923`) token to `tailwind.config.ts`
- Register all 8 sections in `page.tsx` with correct header/nav variant context
- Keep all styling within the existing Tailwind token system

**Non-Goals:**
- Mobile / responsive breakpoints beyond what Tailwind defaults provide (design is desktop-first)
- Routing, state management, or API integration
- Changes to fonts or font loading strategy
- Fixing the `primary-ligth` typo in `tailwind.config.ts` (low risk/reward; many existing class references would need updating)

## Decisions

### D1 — Section variant map as a constant array

Rather than embedding per-section header/nav logic inline in `page.tsx`, define a `SECTION_CONFIG` constant array indexed 0–7, each entry carrying `{ headerType: 0 | 1 | 2, navLight: boolean }`. This makes extending or reordering sections trivial and eliminates scattered conditionals.

```
// headerType: 0 = default (pink logo + solid button)
//             1 = variant2 (white logo + outline button, light bg)
//             2 = variant3 (white logo + solid button, dark/pink bg)
const SECTION_CONFIG = [
  { headerType: 0, navLight: false }, // 01 Hero
  { headerType: 2, navLight: true  }, // 02 Sobre (pink bg)
  { headerType: 1, navLight: false }, // 03 ONGs
  { headerType: 1, navLight: false }, // 04 Apoiador
  { headerType: 2, navLight: true  }, // 05 Cadastro ONG (dark)
  { headerType: 2, navLight: true  }, // 06 Objetivo (dark)
  { headerType: 2, navLight: true  }, // 07 Causas (dark)
  { headerType: 2, navLight: true  }, // 08 Contato (dark)
]
```

Alternatives considered: keeping inline conditionals (harder to maintain), prop-drilling a `section` number into Header/Nav (unnecessary coupling).

### D2 — One component file per section

Each section gets its own `src/components/Home/<Name>Section.tsx`. This mirrors the existing pattern (`MainSection.tsx`) and isolates responsibilities. Sections 06 and 07 share a circular dot-sidebar sub-component (`DotSidebar.tsx`) extracted to avoid duplication.

### D3 — Asset strategy for missing images

Several sections require images that are not yet in the repo (app screenshots, team illustration, causes background). Implement sections with placeholder `<div>` blocks of the correct dimensions (styled with `bg-gray-300`) and TODO comments so the UI compiles and the layout is verifiable without the final assets. Once assets are provided, swap the placeholder for `<Image>` from `next/image`.

Alternatives considered: blocking implementation on assets (slows progress), fetching from Figma programmatically (images are live app screenshots, not Figma vectors).

### D4 — Scroll handler refactor

Replace the hardcoded `[0,1,2,3,4].forEach` loop in `page.tsx` with a derived array `Array.from({ length: 8 }, (_, i) => i)`. The detection logic (measuring `getBoundingClientRect`) is kept unchanged.

### D5 — Header `type` prop extension

`HomePageHeader.tsx` currently accepts `type: number` but only branches on `type === 1`. Extend the logic to also branch on `type === 2` for the dark/pink variant (white logo + solid pink button, but with a transparent/dark header background). Remove the dead `import { type } from "os"` on line 1.

## Risks / Trade-offs

- **Missing assets (sections 05–07)**: Placeholder divs allow layout to compile, but visual QA requires real images. → Mitigation: document placeholder locations clearly; product team delivers assets separately.
- **Figma wireframe sections (06, 07, 08)**: These sections show `#D9D9D9` placeholder headers in Figma, suggesting design is still in progress. Implementation will follow the best available information from the PRD; a design review may trigger adjustments. → Mitigation: implement the clearly defined parts (title, background color, sidebar) and leave content areas flexible.
- **Scroll detection accuracy**: The current `getBoundingClientRect`-based detection can miss rapid scrolls. No change is planned (out of scope); this is a pre-existing limitation.
- **`primary-ligth` typo**: Leaving the typo avoids a large refactor of class references but perpetuates the inconsistency. Accepted trade-off for this change.

## Migration Plan

No deployment steps beyond a standard `pnpm build`. The change is purely additive (new components + bug fixes). Rollback is a revert of the PR.

## Open Questions

- **Section 08 (Contato)**: The Figma design context was rate-limited during PRD analysis. Does the Contact section include a form, email links, or just a CTA image? → Assume image + CTA for now; revisit when Figma access is available.
- **ONG images (Section 03)**: Real partner ONG logos/photos are not yet available. Use `200×200` placeholder divs for now.
- **Team spirit illustration (Section 04)**: Can the SVG be exported from Figma directly, or does it require a license check? → Assume it can be exported; if not, use a placeholder.
