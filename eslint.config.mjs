// @ts-check
import eslint from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,

  globalIgnores([
    '**/dist/**',
    '**/build/**',
    '**/.next/**',
    '**/.turbo/**',

    // Dependencies
    '**/node_modules/**',

    // Test coverage
    '**/coverage/**',

    // Generated/minified files
    '**/*.min.js',
    '**/*.map',

    // Cache
    '**/.cache/**',
    '**/.tmp/**',
  ]),
])
