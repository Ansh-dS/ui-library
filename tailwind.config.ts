import type { Config } from 'tailwindcss'
export default {
  content: [
    './packages/ui/src/**/*.{js,ts,jsx,tsx}',
    './apps/storybook/**/*.{js,ts,jsx,tsx}',
    './packages/ui/*.{ts, d.ts}',
  ],

  plugins: [],
} satisfies Config
