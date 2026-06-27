## ADDED Requirements

### Requirement: ONGs section renders with white-gradient background
The system SHALL render Section 03 ("ONGs que contribuimos") as a full-screen section (`h-screen`) with `white-linear` gradient background, decorative wavy SVG overlay, an inverted wave at the top, and a title "ONGs que contribuimos" in Montserrat Bold 40px, color `white/default`.

Figma reference: [node 28:328](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=28-328)

#### Scenario: Section background and title visible
- **WHEN** the user scrolls to Section 03
- **THEN** the section SHALL use `white-linear` background and display the heading "ONGs que contribuimos" in white Montserrat Bold 40px

### Requirement: ONGs section contains a card with three ONG tiles
The system SHALL render a central card (`white-linear`, `card-shadow`, `rounded-[4px]`, height ~505px) containing three ONG tiles horizontally arranged with `gap-[51px]` and centered. Each tile SHALL display: a `200×200` square image (rounded), an ONG name in Montserrat Medium 24px, and a description in Poppins Light 16px centered.

#### Scenario: Three ONG tiles rendered inside card
- **WHEN** Section 03 is visible
- **THEN** the card SHALL contain exactly three ONG tiles each with an image placeholder, name, and description

#### Scenario: ONG tile accepts data props
- **WHEN** the `OngsSection` component receives an array of `{ name, description, imageUrl }` objects
- **THEN** each tile SHALL render the corresponding name, description, and image

### Requirement: ONG tile image uses next/image
The system SHALL use `next/image` (`<Image>`) for each ONG tile image, with `width={200}` and `height={200}`.

#### Scenario: Images use next/image component
- **WHEN** Section 03 is rendered
- **THEN** each ONG tile image SHALL be rendered via `next/image` with the correct dimensions
