# ⚡ Aura UI

A theme-agnostic, heavily optimized design architecture that shifts the focus from "Widgets" to "Systems."

Aura UI provides centralized, natively performant components distributed via a serverless Edge registry. Download components directly into your local codebase—they instantly inherit your global brand rules with zero React re-renders and zero third-party animation bloat.

## ✨ Features

- **Zero React Re-renders:** Driven natively by CSS custom properties.
- **Decoupled Architecture:** Components, CLI, and design tokens operate independently.
- **Instant White-Labeling:** Change your root CSS theme file and the entire project updates.
- **CLI-Driven Injection:** Download raw `.tsx` files directly into your project via the terminal.
- **Zero Animation Bloat:** Complex state transitions are hand-coded using native Tailwind physics.

## 🚀 Quick Start

Stop manually painting individual UI elements. Set up the initialization engine in your workspace:

```bash
npx auracli init
```

Deploy a smart architectural component directly from the Vercel registry:

```bash
npx auracli add button
```

## 🏗️ System Architecture

Aura UI is built as a high-velocity Turborepo monorepo. The architecture is decoupled to ensure clean internal linkage without requiring complex npm organizational scopes.

### 1. The Monorepo Infrastructure

Turborepo orchestrates tasks and zero-install caching, while the Next.js Vercel Edge Network handles serverless component distribution.

- `pnpm-workspace.yaml`: Declares the monorepo structure, linking `apps/*` and `packages/*`.
- `package.json` (Workspace): Establishes a flat naming architecture (`aura-ui`, `aura-server`, `auracli`, `aura-design-decisions`, `aura-storybook`).
- `apps/server/next.config.ts`: Uses `outputFileTracingIncludes` to forcefully bundle dynamic component and theme directories, preventing serverless tree-shaking from pruning them during the Edge build phase.
- `turbo.json`: Defines the build execution graph and includes a unified `"clean": { "cache": false }` task to safely wipe stale build artifacts (`dist`, `.next`) across all micro-packages simultaneously.

### 2. The Design Token Engine

The token system handles theme compilation completely independently of PostCSS. Developers edit core design tokens, and the generator script executes, outputting compiled CSS files directly to the server. When a user runs the CLI, these global stylesheets are injected and automatically coupled with Tailwind.

- `packages/designDecisions/package.json`: The isolated engine handling theme compilation.
- `generateCssFiles.ts` & `stringCss.ts`: Node.js FS scripts that parse TypeScript token objects and format them into scalable CSS custom properties.
- `apps/server/themes/*.css`: The destination stylesheets (e.g. `global.css`, `riverside.css`, `tally.css`) making the compiled tokens available for the CLI to distribute.

### 3. Core UI & Documentation

Because components are raw `.tsx` files in the server directory, Vite-powered Storybook reads them directly via workspace mapping, providing lightning-fast hot-reloading for visual testing.

- `apps/server/components/[ComponentName]/styles.ts`: Uses Class Variance Authority (CVA) to cleanly define variant physics and design states, replacing messy template literals.
- `apps/server/components/[ComponentName]/[ComponentName].tsx`: The raw React structural template.
- `apps/storybook/src/stories/*.stories.tsx`: Interactive implementation documentation for every component.

### 4. Complex UI Engineering

Advanced components (Popovers, Tabs, DataGrids) deeply utilize compound component patterns and advanced React context architectures without relying on heavy external animation libraries.

- **Native Tailwind Physics:** Complex transition states are defined directly in `styles.ts` CVA using native utilities (e.g. `translate-y-4`, `opacity-0`).
- **Strict TypeScript Contracts:** Types are extracted directly from CVA (`VariantProps<typeof popoverVariants>`). Utilities like `Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>` are used to actively prevent prop collisions.
- **Advanced Hooks:** `useRef` tracks DOM elements for outside clicks/layout shifts, and `useContext` prevents prop-drilling across compound components (sharing active states between Tabs and TabPanels).

### 5. The CLI Network Engine

The CLI makes secure fetch requests to the serverless endpoint (e.g. [https://aura-server.vercel.app/api/registry/button](https://aura-server.vercel.app/api/registry/button)). The endpoint streams the raw `.tsx` and `.ts` string files back, and Node's file system API injects them perfectly into the consumer's local source directory.

- `packages/cli/package.json`: Contains the critical bin execution mapping.
- `packages/cli/bin/aura-init.js`: The executable entry point.
- `packages/cli/src/commands/init/index.ts`: The scaffold logic for setting up a consumer project using inquirer.
- `packages/cli/src/commands/add/index.ts`: The network engine that leverages the native Fetch API and `fs/promises` to download components dynamically.

## 🛠️ Local Development

Clone the repository and install dependencies using pnpm:

```bash
git clone https://github.com/Ansh-dS/aura.git
cd aura
pnpm install
```

Start the interactive Storybook environment to visually test components:

```bash
pnpm turbo run dev --filter=aura-storybook
```

## 📄 License

This project is licensed under the MIT License.

Engineered and architected by Anshdeep Singh as a Cohort 2.0 milestone at IIT Patna.
