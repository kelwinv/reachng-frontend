# AGENTS.md

## Codex specific instructions

This repo is a single **Next.js 13 (app router) frontend** named `reachng-frontend`. It is a static marketing/landing page (ReachNG) with no backend, database, or environment variables required. Package manager is **pnpm** (see `pnpm-lock.yaml`).

Standard commands live in `package.json` `scripts`:
- Dev server: `pnpm dev` (serves on http://localhost:3000)
- Lint: `pnpm lint`
- Production build: `pnpm build`
- OpenSpec CLI: `pnpm openspec` (e.g. `pnpm openspec list`, `pnpm openspec validate <change>`)
- Refresh Cursor OpenSpec skills/commands: `pnpm openspec:update`

## OpenSpec (spec-driven workflow)

OpenSpec is configured for this repo with the **core** profile and **Codex** integration.

- Specs (source of truth): `openspec/specs/`
- Active changes: `openspec/changes/`
- Project config: `openspec/config.yaml`
- Codex slash commands: `.codex/commands/opsx-*.md`
- Codex skills: `.codex/skills/openspec-*/SKILL.md`

Typical workflow in Codex:
1. `/opsx:propose "your idea"` — create proposal, design, specs, and tasks
2. `/opsx:apply` — implement tasks
3. `/opsx:sync` — reconcile specs with implementation
4. `/opsx:archive` — merge specs and archive the change

After upgrading `@fission-ai/openspec`, run `pnpm openspec:update` to refresh agent instructions.

Notes:
- Dependencies are refreshed automatically by the cloud startup/update script (`pnpm install`), so you normally do not need to install manually.
- `pnpm install` prints a warning about an ignored build script for `unrs-resolver` (a transitive dep). This is harmless — lint, dev, and build all work without approving it, so no action is needed.
- `pnpm dev` and `pnpm build` both write to the same `.next/` directory; avoid running them simultaneously to prevent conflicts.
