// @ts-check
import eslint from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig(
  // Global ignores (MUST be first, NOT in array)
  globalIgnores([
    // Node & Build
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/.next/**',
    '**/.turbo/**',
    '**/*.stories.*',

    // Storybook (ADD THESE)
    '**/.storybook/**',
    '**/storybook-static/**',

    // Cache & Temp
    '**/.cache/**',
    '**/.tmp/**',
  ]),

  eslint.configs.recommended,
  ...tseslint.configs.recommended
)
