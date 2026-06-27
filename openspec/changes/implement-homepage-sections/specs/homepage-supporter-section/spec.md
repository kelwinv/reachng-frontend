## ADDED Requirements

### Requirement: Supporter section renders with white-gradient background
The system SHALL render Section 04 ("Como posso ser apoiador?") as a full-screen section (`h-screen`) with `white-linear` background, a decorative line SVG on the left, a heading "Como posso ser apoiador" in Montserrat SemiBold 40px color `primary-dark (#4D1A22)`, and a subtitle in Poppins Light 16px color `primary-dark-soft`.

Figma reference: [node 49:144](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-144)

#### Scenario: Section background, heading and subtitle visible
- **WHEN** the user scrolls to Section 04
- **THEN** the heading "Como posso ser apoiador" SHALL be visible in Montserrat SemiBold 40px `primary-dark` and subtitle SHALL use Poppins Light 16px `primary-dark-soft`

### Requirement: Supporter section contains 2×2 step cards
The system SHALL render four step cards arranged in a 2×2 grid on the left half of the section. Each card SHALL use background `primary-light (#FFE0E0)`, `rounded-[8px]`, `card-shadow`, height `126px`, width `408px`, and contain a step title in Montserrat and a short description. Steps in order:
1. "Acesse a plataforma" — with an inline link "aqui" styled in `primary-default` and underlined
2. "Escolha uma ONG"
3. "Contribua"
4. "Acompanhe sua Participação"

#### Scenario: Four step cards rendered in 2x2 grid
- **WHEN** Section 04 is visible
- **THEN** exactly four cards SHALL be rendered in a 2-column, 2-row grid on the left side

#### Scenario: Step 1 card contains styled link
- **WHEN** the first card ("Acesse a plataforma") is rendered
- **THEN** the word "aqui" SHALL appear as an underlined link styled with `primary-default` color

### Requirement: Supporter section contains Team Spirit illustration
The system SHALL render the "Team spirit-amico" illustration occupying the right half of the section. If the SVG asset is available at `public/images/team-spirit-amico.svg`, it SHALL be rendered via `next/image`; otherwise a placeholder `<div>` of equivalent dimensions SHALL be shown with a TODO comment.

#### Scenario: Illustration rendered on right half
- **WHEN** Section 04 is visible
- **THEN** the right half of the section SHALL display the Team spirit illustration or a same-size placeholder
