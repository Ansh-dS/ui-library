import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import path from 'node:path'
// Added PluginOption type to help with the casting fix
import type { PluginOption } from 'vite'

import dts from 'vite-plugin-dts'
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    // Fix: Passing {} satisfies the requirement for 1 argument in some plugin versions
    // Fix: 'as PluginOption' bypasses the complex version mismatch error between Vite and Rollup types
    react({}) as PluginOption,

    //we are using dts to generate declaration file as vite can't create during the build.
    dts({
      include: ['src'],
      exclude: ['src/**/*.stories.*'],
      outDir: 'dist',
    }) as PluginOption,
  ],
  // Note: Removed the explicit css.postcss path.
  // Vite automatically finds your root postcss.config.mjs by searching up the tree.
  resolve: {
    alias: {
      '@globalCss': path.resolve(__dirname, '../../global.css'),
      '@tokenCss': path.resolve(__dirname, '../../token.css'),
    },
  },
  // TypeScript paths only work for type checking.

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyLib',
      formats: ['es', 'umd'], // <--- Best for my project
      fileName: (format) => `ui.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      // shouldn't be bundled
      // Added 'react/jsx-runtime' to prevent duplicate React runtime errors in consuming apps
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
})
