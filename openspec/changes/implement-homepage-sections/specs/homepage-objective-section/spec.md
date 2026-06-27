## ADDED Requirements

### Requirement: Objective section renders with dark background
The system SHALL render Section 06 ("Objetivo do aplicativo") as a full-screen section (`h-screen`) with background color `bg-dark` (`#0F1923`) and a title "Objetivo do aplicativo" in Montserrat Bold 40px, color `#F4F4F4`.

Figma reference: [node 49:375](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-375)

#### Scenario: Section dark background and title visible
- **WHEN** the user scrolls to Section 06
- **THEN** the background SHALL be `#0F1923` and the heading "Objetivo do aplicativo" SHALL be visible in `#F4F4F4` Montserrat Bold 40px

### Requirement: Objective section displays app screenshot
The system SHALL render a large centered app screenshot (target ~1058×628px, `object-cover`). If the image is available at `public/images/app-screenshot-objective.png`, it SHALL use `next/image`; otherwise a styled placeholder `<div>` of equivalent dimensions SHALL be rendered with a TODO comment.

#### Scenario: App screenshot or placeholder centered
- **WHEN** Section 06 is visible
- **THEN** a centered image or same-size placeholder SHALL be the primary visual content

### Requirement: Objective section includes dot-control sidebar
The system SHALL render a right-aligned sidebar panel (`background #D9D9D9`) containing three circular white buttons stacked vertically. This sidebar is a reusable `DotSidebar` component shared with Sections 07 and 08.

#### Scenario: Dot sidebar rendered on right side
- **WHEN** Section 06 is visible
- **THEN** a right-aligned panel with three circular dot buttons SHALL be visible
