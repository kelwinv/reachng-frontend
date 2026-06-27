## 1. Foundation — Global Config & Bug Fixes

- [x] 1.1 Add `secondary-dark` (`#0F1923`) color token to `tailwind.config.ts`
- [x] 1.2 Remove dead `import { type } from "os"` from `src/components/Home/HomePageHeader.tsx` line 1
- [x] 1.3 Extend `HomePageHeader.tsx` to support `type=2` (variant3: white logo + solid pink button for dark/pink backgrounds)
- [x] 1.4 Update `Navigation.tsx` so nav text/indicator is white when `selectedIdx` is in `[1, 4, 5, 6, 7]`
- [x] 1.5 Define `SECTION_CONFIG` constant array in `src/app/page.tsx` with 8 entries (`{ headerType, navLight }`)
- [x] 1.6 Update `handleScroll` in `page.tsx` to iterate indices `[0,1,2,3,4,5,6,7]` (all 8 sections)
- [x] 1.7 Wire `HomePageHeader` `type` prop and `Navigation` light prop through `SECTION_CONFIG[accScrollPage]`
- [x] 1.8 Run `pnpm lint` and fix any errors introduced

## 2. Shared Component — DotSidebar

- [x] 2.1 Create `src/components/Home/DotSidebar.tsx` — right-aligned `#D9D9D9` panel with 3 circular white buttons

## 3. Section 02 — Sobre a ReachNG

- [x] 3.1 Create `src/components/Home/AboutSection.tsx` with `primary-default` background and title "Sobre a ReachNG"
- [x] 3.2 Implement white card (`white-linear`, `card-shadow`, `rounded-[4px]`, ~80% width) inside `AboutSection`
- [x] 3.3 Implement 3-column layout within the card with pink vertical dividers (2px, `primary-default`)
- [x] 3.4 Add column content: "Quem somos?", "Como funciona?", "Por que escolher o reachNG?" with correct typography
- [x] 3.5 Add two ellipse decorative elements at top-left and top-right corners of the card
- [x] 3.6 Add arrow-icon decorative element at the bottom-right corner of the card
- [x] 3.7 Register `AboutSection` as `section-1` in `page.tsx` with `h-screen` and `id="section-1"`

## 4. Section 03 — ONGs que contribuimos

- [x] 4.1 Create `src/components/Home/OngsSection.tsx` with `white-linear` background and title "ONGs que contribuimos"
- [x] 4.2 Define `OngCard` type `{ name: string; description: string; imageUrl: string }` (in same file or shared types)
- [x] 4.3 Implement central card (`white-linear`, `card-shadow`, `rounded-[4px]`, h~505px) with 3 ONG tiles
- [x] 4.4 Each ONG tile: `next/image` 200×200 (or placeholder div), name Montserrat Medium 24px, description Poppins Light 16px centered
- [x] 4.5 Register `OngsSection` as `section-2` in `page.tsx` with `h-screen` and `id="section-2"`

## 5. Section 04 — Como posso ser apoiador?

- [x] 5.1 Create `src/components/Home/SupporterSection.tsx` with `white-linear` background
- [x] 5.2 Add heading "Como posso ser apoiador" (Montserrat SemiBold 40px, `primary-dark`) and subtitle (Poppins Light 16px, `primary-dark-soft`)
- [x] 5.3 Implement 2×2 grid of step cards (`primary-light`, `rounded-[8px]`, `card-shadow`, 126×408px) with step titles and descriptions
- [x] 5.4 Add inline link "aqui" (underlined, `primary-default`) to Step 1 card ("Acesse a plataforma")
- [x] 5.5 Add `public/images/team-spirit-amico.svg` (export from Figma or placeholder div if unavailable)
- [x] 5.6 Render Team spirit illustration (or placeholder) on the right half of the section
- [x] 5.7 Register `SupporterSection` as `section-3` in `page.tsx` with `h-screen` and `id="section-3"`

## 6. Section 05 — Como posso cadastrar minha ONG?

- [x] 6.1 Create `src/components/Home/RegisterOngSection.tsx` with `secondary-dark` background and title "Como posso cadastrar minha ONG?"
- [x] 6.2 Add decorative gradient wave faixa at the top of the section
- [x] 6.3 Add `public/images/app-screenshot-register.png` (export from Figma or use placeholder div ~1129×542px)
- [x] 6.4 Render app screenshot (or placeholder) as the central content of the section
- [x] 6.5 Add `public/images/register-character.svg` (export from Figma or placeholder) positioned at bottom-right
- [x] 6.6 Register `RegisterOngSection` as `section-4` in `page.tsx` with `h-screen` and `id="section-4"`

## 7. Section 06 — Objetivo do aplicativo

- [x] 7.1 Create `src/components/Home/ObjectiveSection.tsx` with `secondary-dark` background and title "Objetivo do aplicativo"
- [x] 7.2 Add `public/images/app-screenshot-objective.png` (export from Figma or placeholder div ~1058×628px)
- [x] 7.3 Render app screenshot (or placeholder) as the centered primary content
- [x] 7.4 Include `DotSidebar` on the right side
- [x] 7.5 Register `ObjectiveSection` as `section-5` in `page.tsx` with `h-screen` and `id="section-5"`

## 8. Section 07 — ONGs e Suas causas sociais e ambientais

- [x] 8.1 Create `src/components/Home/OngsCausesSection.tsx` with `secondary-dark` background and title "ONGs e Suas causas sociais e ambientais"
- [x] 8.2 Add `public/images/ongs-causes-bg.png` (export from Figma or placeholder div ~1424×626px)
- [x] 8.3 Render full-bleed image (or placeholder) in the lower portion of the section
- [x] 8.4 Include `DotSidebar` on the right side
- [x] 8.5 Register `OngsCausesSection` as `section-6` in `page.tsx` with `h-screen` and `id="section-6"`

## 9. Section 08 — Contato

- [x] 9.1 Create `src/components/Home/ContactSection.tsx` with layered background images (or placeholder divs)
- [x] 9.2 Add heading / CTA contact element (email, social, or placeholder pending final design)
- [x] 9.3 Include `DotSidebar` on the right side
- [x] 9.4 Register `ContactSection` as `section-7` in `page.tsx` with `h-screen` and `id="section-7"`

## 10. QA & Verification

- [x] 10.1 Run `pnpm lint` — fix all lint errors
- [x] 10.2 Run `pnpm build` — ensure production build is clean
- [ ] 10.3 Run `pnpm dev` and manually scroll through all 8 sections verifying correct header variant and nav color per section
- [ ] 10.4 Verify scroll handler updates active section index for sections 5–8
- [ ] 10.5 Replace any remaining placeholder divs with real assets once provided by the product team
