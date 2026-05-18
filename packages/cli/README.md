# CLI Package Documentation

This package provides the `ui-lib` command-line interface for initializing and managing the UI library.

## How the files are connected

The CLI starts from the package bin script and then flows into the TypeScript source:

1. `packages/cli/bin/ui-lib.js` is the executable entry point.
2. That file loads the compiled CLI entry from `dist/` after the package is built.
3. `packages/cli/src/index.ts` creates the Commander program, sets the CLI name and version, and registers commands.
4. `packages/cli/src/commands/init.ts` defines the `init` command.
5. `packages/cli/src/templates/config.generator.ts` builds the JSON config object used by `init`.
6. When the CLI is built, the TypeScript sources are emitted to `packages/cli/dist/`.
   d
   The runtime flow is:

`bin/ui-lib.js` -> compiled `index.js` -> `init` command -> `config.generator.ts` -> `ui-lib.config.json`

## How to start this package

### From the repository

1. Install dependencies from the repo root:

```bash
pnpm install
```

2. Build the CLI package:

```bash
pnpm --filter cli build
```

3. Run the CLI from the built output:

```bash
node packages/cli/dist/index.js init
```

### As an installed command

After the package is linked or published, the command name is `ui-lib` because it is mapped in `packages/cli/package.json`.

```bash
ui-lib init
```

## Role of each file

### `packages/cli/package.json`

Defines the package name, version, dependencies, scripts, and the `bin` mapping that exposes the CLI as `ui-lib`.

### `packages/cli/tsconfig.json`

Configures the TypeScript build for this package. It compiles `src/` into `dist/`.

### `packages/cli/bin/ui-lib.js`

Executable shim that Node runs when the CLI command is invoked. Its job is to boot the compiled CLI entry.

### `packages/cli/src/index.ts`

Main Commander setup file. It creates the CLI program, sets the command name and version, registers subcommands, and parses `process.argv`.

### `packages/cli/src/commands/init.ts`

Implements the `init` command. It prompts the user for initialization options, calls the config generator, writes `ui-lib.config.json`, and prints the next steps.

### `packages/cli/src/templates/config.generator.ts`

Creates the config object used by the `init` command. It converts the selected themes into a `theme` record and adds the version.

### `packages/cli/dist/`

Generated build output. This folder is created by the TypeScript compiler and should not be edited directly.

## What the init command does

When you run `init`, the CLI:

1. Asks whether you want to initialize the project.
2. Lets you choose a theme.
3. Optionally asks whether dependencies should be installed.
4. Generates a `ui-lib.config.json` file in the current working directory.
5. Prints the import path you can use to start consuming the library.

## Notes

- The package currently builds TypeScript into `dist/`.
- The CLI command name exposed by the package is `ui-lib`.
- The `init` flow writes files into the directory where the command is run, not into the package folder itself.
