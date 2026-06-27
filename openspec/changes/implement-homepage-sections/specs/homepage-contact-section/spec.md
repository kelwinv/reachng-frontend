## ADDED Requirements

### Requirement: Contact section renders as the final section
The system SHALL render Section 08 ("Contato") as a full-screen section (`h-screen`), the last of the 8 scroll-snap pages. It SHALL include two layered background images (`image 5` at `y=440`, `image 6` at `y=235`) using `object-cover`. If images are not yet available, styled placeholder divs of equivalent dimensions SHALL be rendered with TODO comments.

Figma reference: [node 49:442](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-442)

#### Scenario: Contact section is reachable via scroll
- **WHEN** the user scrolls past Section 07
- **THEN** Section 08 SHALL become the active scroll-snap target and the left nav SHALL show page "08" active

#### Scenario: Background images or placeholders rendered
- **WHEN** Section 08 is rendered
- **THEN** two layered background images or same-size placeholder divs SHALL be present

### Requirement: Contact section reuses DotSidebar
The system SHALL render the shared `DotSidebar` component on the right side of Section 08, identical to its usage in Sections 06 and 07.

#### Scenario: Dot sidebar rendered on right side
- **WHEN** Section 08 is visible
- **THEN** a right-aligned panel with three circular dot buttons SHALL be visible

### Requirement: Contact section includes contact information or CTA
The system SHALL include at minimum a heading or CTA indicating how to contact ReachNG (email, social, or form placeholder), pending final design confirmation. If the Figma design is still a wireframe, a clearly labeled placeholder block SHALL be used.

#### Scenario: Contact content present
- **WHEN** Section 08 is visible
- **THEN** a heading or CTA contact element SHALL be rendered (may be a placeholder)
