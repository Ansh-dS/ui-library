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
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
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
        },
        border: {
          default: 'rgba(44, 36, 27, 0.1)',
          focus: '#C5A059',
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
      shadows: {
        sm: '0 1px 2px rgba(44, 36, 27, 0.05)',
        md: '0 4px 6px rgba(44, 36, 27, 0.07), 0 2px 4px rgba(44, 36, 27, 0.04)',
        lg: '0 10px 15px rgba(44, 36, 27, 0.1), 0 4px 6px rgba(44, 36, 27, 0.05)',
        xl: '0 20px 25px rgba(44, 36, 27, 0.12)',
        inner: 'inset 0 2px 4px rgba(44, 36, 27, 0.04)',
      },
    },

    // ---------------- DARK: "Kohl & Shastar" (Charcoal & Steel) ----------------
    dark: {
      colors: {
        primary: {
          50: '#E6F0EB',
          100: '#CDE1D7',
          500: '#2A7A5C', // Brighter emerald for dark-mode pop
          600: '#1B5E44',
          700: '#164A38',
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
        },
        border: {
          default: 'rgba(253, 251, 247, 0.08)',
          focus: '#D4B475',
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
      shadows: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.4)',
        md: '0 4px 6px rgba(0, 0, 0, 0.5)',
        lg: '0 10px 20px rgba(0, 0, 0, 0.6)',
        xl: '0 25px 50px rgba(0, 0, 0, 0.7)',
        inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.4)',
      },
    },
  },
}

export default RiversideTheme
