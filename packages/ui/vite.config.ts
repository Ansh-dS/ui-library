import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import path from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const cssPath = path.resolve(__dirname, '../../global.css')
console.log('Resolving @styles to:', cssPath)
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: path.resolve(__dirname, '../../postcss.config.js')  // ← Add this!
  },

  // TypeScript paths only work for type checking.
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, '../../global.css'),
      '@ui': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyLib',
      formats: ['es', 'umd'], // <--- Best for your project
      fileName: (format) => `my-ui.${format}.js`,
    },
    rollupOptions: {
      // shouldn't be bundled
      external: ['react', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
