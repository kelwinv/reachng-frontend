## ADDED Requirements

### Requirement: About section renders with pink background
The system SHALL render Section 02 ("Sobre a ReachNG") as a full-screen section (`h-screen`) with background color `primary-default` (`#FF5671`), decorative curved-line SVG overlay, and a section title "Sobre a ReachNG" in Montserrat Bold 40px, color `white/default (#FAF7FC)`.

Figma reference: [node 46:55](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=46-55)

#### Scenario: Section background and title visible
- **WHEN** the user scrolls to Section 02
- **THEN** the section background SHALL be `#FF5671` and the heading "Sobre a ReachNG" SHALL be visible in white Montserrat Bold 40px

### Requirement: About section contains three-column card
The system SHALL render a white card (`white-linear` gradient background, `card-shadow`, `rounded-[4px]`) occupying approximately 80% of the section width, containing three equal columns separated by vertical pink dividers (`#FF5671`, 2px wide). Each column SHALL have a heading in Montserrat SemiBold 24px and body text in Poppins Regular 20px, color `primary-dark-soft`.

Column content:
1. "Quem somos?" — description of who ReachNG is
2. "Como funciona?" — two-paragraph explanation
3. "Por que escolher o reachNG?" — differentiators

#### Scenario: Three columns with dividers rendered
- **WHEN** the About section is visible
- **THEN** the white card SHALL contain exactly three text columns separated by two vertical pink dividers

#### Scenario: Column headings use correct typography
- **WHEN** the About section card is rendered
- **THEN** each column heading SHALL use Montserrat SemiBold 24px and body SHALL use Poppins Regular 20px

### Requirement: About section includes decorative elements
The system SHALL include two ellipse decorative elements at the top-left and top-right corners of the card, and an arrow-icon decorative element at the bottom-right corner of the card.

#### Scenario: Decorative elements present in DOM
- **WHEN** the About section is rendered
- **THEN** two ellipse decorations at card top corners and one arrow icon at card bottom-right SHALL be present
