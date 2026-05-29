import type { Config } from 'tailwindcss'
export default {
  content: [
    './apps/registry-server/**/*.{js,ts,jsx,tsx}',
    './apps/storybook/**/*.{js,ts,jsx,tsx}',
  ],

  plugins: [],
} satisfies Config
