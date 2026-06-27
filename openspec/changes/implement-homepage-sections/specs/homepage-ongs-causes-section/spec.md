## ADDED Requirements

### Requirement: ONGs Causes section renders with dark background and full-bleed image
The system SHALL render Section 07 ("ONGs e Suas causas sociais e ambientais") as a full-screen section (`h-screen`) with background color `bg-dark` (`#0F1923`), a title "ONGs e Suas causas sociais e ambientais" in Montserrat Bold 40px color `#F4F4F4`, and a large full-bleed background image (`1424×626`, `object-cover`, positioned at `y=262`). If the image is available at `public/images/ongs-causes-bg.png`, it SHALL use `next/image`; otherwise a placeholder `<div>` SHALL be rendered.

Figma reference: [node 49:412](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-412)

#### Scenario: Section dark background and title visible
- **WHEN** the user scrolls to Section 07
- **THEN** the background SHALL be `#0F1923` and the heading "ONGs e Suas causas sociais e ambientais" SHALL be visible in `#F4F4F4`

#### Scenario: Full-bleed image or placeholder present
- **WHEN** Section 07 is rendered
- **THEN** a full-width image or same-size placeholder SHALL occupy the lower portion of the section

### Requirement: ONGs Causes section reuses DotSidebar
The system SHALL render the shared `DotSidebar` component on the right side of Section 07, identical to its usage in Section 06.

#### Scenario: Dot sidebar rendered on right side
- **WHEN** Section 07 is visible
- **THEN** a right-aligned panel with three circular dot buttons SHALL be visible
