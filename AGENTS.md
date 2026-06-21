# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **Next.js 16 (App Router) frontend** named `reachng-frontend`. It is a static marketing/landing page (ReachNG) with no backend, database, or environment variables required. Package manager is **pnpm** (see `pnpm-lock.yaml`). Requires **Node.js 20.9+**.

Standard commands live in `package.json` `scripts`:
- Dev server: `pnpm dev` (serves on http://localhost:3000)
- Lint: `pnpm lint`
- Production build: `pnpm build`

Notes:
- Dependencies are refreshed automatically by the cloud startup/update script (`pnpm install`), so you normally do not need to install manually.
- `pnpm install` may print a warning about ignored build scripts (`unrs-resolver`, `sharp`). Lint, dev, and build work without approving them; approve `sharp` if image optimization fails at runtime.
- `pnpm dev` and `pnpm build` both write to the same `.next/` directory; avoid running them simultaneously to prevent conflicts.
