# rk-code

pnpm monorepo.

## Structure

- `apps/desktop` — Electron desktop app (Electron Forge + Vite, React + Tailwind CSS)

## Commands

Run from the repository root:

| Command          | Description                                   |
| ---------------- | --------------------------------------------- |
| `pnpm install`   | Install all workspace dependencies            |
| `pnpm start`     | Run the desktop app in dev mode (HMR enabled) |
| `pnpm package`   | Package the desktop app                       |
| `pnpm make`      | Build distributable installers                |
| `pnpm lint`      | Lint and check formatting (oxlint + oxfmt)    |
| `pnpm lint:fix`  | Lint and fix formatting                       |
| `pnpm typecheck` | Typecheck all workspace packages              |
