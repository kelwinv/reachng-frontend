## ADDED Requirements

### Requirement: Register ONG section renders with dark background
The system SHALL render Section 05 ("Como posso cadastrar minha ONG?") as a full-screen section (`h-screen`) with background color `bg-dark` (`#0F1923`), a decorative gradient wave faixa at the top, and a title "Como posso cadastrar minha ONG?" in Montserrat SemiBold 40px, color `#FFF7F8`.

Figma reference: [node 49:337](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-337)

#### Scenario: Section dark background and title visible
- **WHEN** the user scrolls to Section 05
- **THEN** the section background SHALL be `#0F1923` and the heading "Como posso cadastrar minha ONG?" SHALL be visible in `#FFF7F8` Montserrat SemiBold 40px

### Requirement: Register ONG section displays app screenshot
The system SHALL render a large central app screenshot image (target dimensions ~1129×542px, `object-cover`). If the image is available at `public/images/app-screenshot-register.png`, it SHALL use `next/image`; otherwise a placeholder `<div>` of equivalent dimensions (styled `bg-gray-700`) SHALL be rendered with a TODO comment.

#### Scenario: App screenshot or placeholder centered
- **WHEN** Section 05 is visible
- **THEN** a centered image or same-size placeholder SHALL occupy the main content area

### Requirement: Register ONG section includes decorative character
The system SHALL render a decorative animated-character SVG in the bottom-right corner. If the asset is available at `public/images/register-character.svg`, it SHALL use `next/image`; otherwise a placeholder div SHALL be rendered.

#### Scenario: Decorative character positioned bottom-right
- **WHEN** Section 05 is visible
- **THEN** a decorative element SHALL be absolutely positioned at the bottom-right of the section

### Requirement: Dark color token added to Tailwind config
The system SHALL define a new Tailwind color token `bg-dark` with value `#0F1923` in `tailwind.config.ts` so it is available as `bg-bg-dark` (or a suitable alias like `secondary-dark`).

#### Scenario: Dark token available in Tailwind
- **WHEN** `pnpm build` is run after adding the token
- **THEN** the class `bg-bg-dark` (or chosen alias) SHALL compile without error
