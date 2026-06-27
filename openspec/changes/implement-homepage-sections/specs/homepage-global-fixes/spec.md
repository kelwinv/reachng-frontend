## ADDED Requirements

### Requirement: HomePageHeader supports three visual variants
The system SHALL update `HomePageHeader.tsx` to support three `type` values:
- `type=0` (default): pink/rose logo + solid pink "Ver Ongs" button (used on Section 01)
- `type=1` (variant2): white logo + outline pink button (used on light-bg sections 03, 04)
- `type=2` (variant3): white logo + solid pink button (used on dark/pink sections 02, 05, 06, 07, 08)

The dead import `import { type } from "os"` on line 1 of `HomePageHeader.tsx` SHALL be removed.

#### Scenario: Header renders default variant on Section 01
- **WHEN** `type={0}` is passed to `HomePageHeader`
- **THEN** the logo SHALL use the pink/rose color and the button SHALL be solid pink

#### Scenario: Header renders light variant on Sections 03 and 04
- **WHEN** `type={1}` is passed to `HomePageHeader`
- **THEN** the logo SHALL be white and the button SHALL use outline pink style

#### Scenario: Header renders dark variant on Sections 02, 05–08
- **WHEN** `type={2}` is passed to `HomePageHeader`
- **THEN** the logo SHALL be white and the button SHALL be solid pink

#### Scenario: Dead import removed
- **WHEN** `HomePageHeader.tsx` is linted
- **THEN** there SHALL be no import from `"os"`

### Requirement: Navigation shows white color on dark and pink sections
The system SHALL update `Navigation.tsx` so that the nav text and active indicator are white (`#FAF7FC`) when the active section index is in `[1, 4, 5, 6, 7]` (sections 02, 05, 06, 07, 08), and the default dark color otherwise.

#### Scenario: White nav on pink section (02)
- **WHEN** section index 1 is active
- **THEN** the navigation text and number SHALL render in white

#### Scenario: White nav on dark sections (05–08)
- **WHEN** section index is 4, 5, 6, or 7
- **THEN** the navigation text and number SHALL render in white

#### Scenario: Default color on light sections (01, 03, 04)
- **WHEN** section index is 0, 2, or 3
- **THEN** the navigation SHALL render in the default dark color

### Requirement: Scroll handler covers all 8 sections
The system SHALL update the `handleScroll` function in `page.tsx` to iterate over section indices `[0, 1, 2, 3, 4, 5, 6, 7]` (8 sections) instead of `[0, 1, 2, 3, 4]`.

#### Scenario: Active section updates beyond index 4
- **WHEN** the user scrolls to Section 05, 06, 07, or 08
- **THEN** the `accScrollPage` state SHALL update to the correct index (4, 5, 6, or 7)

### Requirement: SECTION_CONFIG drives header and nav variants per section
The system SHALL introduce a `SECTION_CONFIG` constant array in `page.tsx` with 8 entries, each providing `{ headerType: 0 | 1 | 2, navLight: boolean }`, eliminating scattered inline conditionals.

#### Scenario: Header variant matches section config
- **WHEN** navigating between sections
- **THEN** the `HomePageHeader` `type` prop SHALL always match the active section's `headerType` from `SECTION_CONFIG`

#### Scenario: Nav light flag matches section config
- **WHEN** navigating between sections
- **THEN** the `Navigation` light mode SHALL always reflect the active section's `navLight` from `SECTION_CONFIG`

### Requirement: Dark color token added to tailwind.config.ts
The system SHALL add a new color entry to `tailwind.config.ts` for `#0F1923` accessible as `bg-secondary-dark` (or `bg-dark` as a top-level alias), usable in Tailwind utility classes without raw hex values.

#### Scenario: Token compiles in Tailwind build
- **WHEN** `pnpm build` is executed
- **THEN** classes using the new dark token SHALL resolve without errors
