import { DesignSystem } from '../tokenDefinition'

const RiversideTheme: DesignSystem = {
  // ----------------------------------------------------------------------
  // GLOBAL TOKENS: The Physical Architecture (Stability & Heritage)
  // ----------------------------------------------------------------------
  global: {
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem',
    },
    borderRadius: {
      sm: '2px', // Sharp, professional for small UI
      base: '4px', // Standard for inputs/buttons
      md: '8px', // Cards
      lg: '12px', // Large video containers
      full: '9999px',
    },
    typography: {
      fontFamily: '"Manrope", sans-serif',
      fontFamilySerif: '"Cormorant Garamond", serif',
      fontFamilyMono: '"JetBrains Mono", monospace',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
        '5xl': '3.75rem',
      },
      lineHeight: {
        tight: 1.1,
        normal: 1.5,
        relaxed: 1.625,
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        widest: '0.05em',
      },
    },
    zIndices: {
      base: 0,
      nav: 10,
      overlay: 20,
      modal: 30,
      popover: 40,
      toast: 50,
    },
    animation: {
      fast: '150ms ease-in-out',
      normal: '300ms ease-in-out',
      slow: '500ms ease-in-out',
    },
  },

  // ----------------------------------------------------------------------
  // THEME MODES: The Royal Palettes
  // ----------------------------------------------------------------------
  modes: {
    // ---------------- LIGHT: "Moti & Panna" (Pearl & Emerald) ----------------
    light: {
      colors: {
        primary: {
          50: '#F2F8F5',
          100: '#E0EFE7',
          500: '#1B5E44', // Panna (Emerald)
          600: '#164A38', // Deep Emerald
          700: '#113A2C',
        },
        accent: {
          500: '#C5A059', // Zari Gold
        },
        neutral: {
          50: '#FDFBF7', // Moti (Pearl/Paper)
          100: '#F5F2EB',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          900: '#2C241B', // Surma (Primary Ink)
        },
        background: {
          primary: '#FDFBF7',
          secondary: '#F5F2EB',
          tertiary: '#EAE5D9',
          muted: '#F5F2EB',
        },
        text: {
          primary: '#2C241B',
          secondary: '#57534E',
          tertiary: '#78716C',
          muted: '#A8A29E',
          // In Light Mode: Moti (Pearl) text on top of Deep Emerald
          inverted: '#FDFBF7',
        },
        border: {
          default: '#D6D3D1', // Maps to neutral-300
          focus: '#C5A059', // Zari Gold (Kept as is - excellent for focus)
          // Added a stronger border for input fields and video container boundaries.
          strong: '#A8A29E', // Maps to neutral-400
        },
        state: {
          success: '#164A38',
          error: '#9B2226', // Lal Qila Red
          warning: '#C5A059',
          info: '#2B4162',
        },
      },
      typography: {
        lineHeight: { relaxed: 1.625 },
        letterSpacing: { normal: '0em' },
        fontWeight: {
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
        },
        fontSmoothing: false,
      },
      // High-Definition Umber: Increased pigment density and tighter blur to ensure depth visibility on warm sand backgrounds.
      shadows: {
        sm: '0 1px 2px 0 rgba(45, 35, 25, 0.12), 0 1px 1px 0 rgba(45, 35, 25, 0.08)',
        md: '0 4px 6px -1px rgba(45, 35, 25, 0.15), 0 2px 4px -2px rgba(45, 35, 25, 0.1)',
        lg: '0 12px 20px -3px rgba(45, 35, 25, 0.18), 0 4px 8px -4px rgba(45, 35, 25, 0.12)',
        xl: '0 25px 35px -5px rgba(45, 35, 25, 0.22), 0 10px 15px -6px rgba(45, 35, 25, 0.15)',
        inner: 'inset 0 2px 4px 0 rgba(45, 35, 25, 0.1)',
      },
    },

    // ---------------- DARK: "Kohl & Shastar" (Charcoal & Steel) ----------------
    dark: {
      colors: {
        primary: {
          50: '#E6F0EB',
          100: '#CDE1D7',
          500: '#10B981',
          600: '#34D399', /* Hover "Glow" (Lighter) */
          700: '#6EE7B7', /* Pressed "Intense Glow" */
        },
        accent: {
          500: '#D4B475', // Brighter Zari
        },
        neutral: {
          50: '#1C1814', // Deepest Kohl base
          100: '#2C241B', // Surfaces
          200: '#38322D',
          300: '#44403C',
          400: '#57534E',
          500: '#78716C',
          600: '#A8A29E',
          700: '#D6D3D1',
          900: '#FDFBF7', // Inverse: Pearl is now the text
        },
        background: {
          primary: '#1C1814',
          secondary: '#2C241B',
          tertiary: '#38322D',
          muted: '#2C241B',
        },
        text: {
          primary: '#FDFBF7',
          secondary: '#D6D3D1',
          tertiary: '#A8A29E',
          muted: '#78716C',
          // In Dark Mode: Deep Kohl (#1C1814) text on top of Bright Emerald/Gold.
          // This gives it a "Stamped Metal" feel rather than a "Glow" feel.
          inverted: '#1C1814',
        },
        border: {
          default: '#44403C', // Maps to neutral-300
          focus: '#D4B475', // Brighter Zari (Kept as is)
          // Added for high-contrast boundaries, like the edges of a main speaker's video feed.
          strong: '#57534E', // Maps to neutral-400
        },
        state: {
          success: '#2A7A5C',
          error: '#EF4444',
          warning: '#D4B475',
          info: '#60A5FA',
        },
      },
      typography: {
        lineHeight: { relaxed: 1.625 },
        letterSpacing: { normal: '0.01em' }, // Fight optical blur
        fontWeight: {
          normal: 300, // Thinned for irradiation
          medium: 400,
          semibold: 500,
          bold: 600,
        },
        fontSmoothing: true, // Antialiased
      },
      // Heavy Anchor: Uses high Y-axis offset and tight radius to pull the shadow down, simulating physical weight.
      shadows: {
        sm: '0 2px 3px -1px rgba(12, 10, 8, 0.6), 0 1px 2px -1px rgba(12, 10, 8, 0.5)',
        md: '0 6px 8px -2px rgba(12, 10, 8, 0.7), 0 3px 6px -3px rgba(12, 10, 8, 0.6)',
        lg: '0 12px 16px -4px rgba(12, 10, 8, 0.8), 0 6px 8px -5px rgba(12, 10, 8, 0.7)',
        xl: '0 24px 32px -6px rgba(12, 10, 8, 0.9), 0 12px 14px -8px rgba(12, 10, 8, 0.8)',
        inner: 'inset 0 2px 4px 0 rgba(12, 10, 8, 0.8)',
      },
    },
  },
}

export default RiversideTheme
