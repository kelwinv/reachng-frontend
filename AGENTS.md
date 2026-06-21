# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **Next.js 13 (app router) frontend** named `reachng-frontend`. It is a static marketing/landing page (ReachNG) with no backend, database, or environment variables required. Package manager is **pnpm** (see `pnpm-lock.yaml`).

Standard commands live in `package.json` `scripts`:
- Dev server: `pnpm dev` (serves on http://localhost:3000)
- Lint: `pnpm lint`
- Production build: `pnpm build`

Notes:
- Dependencies are refreshed automatically by the cloud startup/update script (`pnpm install`), so you normally do not need to install manually.
- `pnpm install` prints a warning about an ignored build script for `unrs-resolver` (a transitive dep). This is harmless — lint, dev, and build all work without approving it, so no action is needed.
- `pnpm dev` and `pnpm build` both write to the same `.next/` directory; avoid running them simultaneously to prevent conflicts.
