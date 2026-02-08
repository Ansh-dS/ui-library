// packages/tokens/src/themes/microsoft.ts
import { DesignSystem } from '../tokenDefinition'

const MicrosoftTheme: DesignSystem = {
  // ----------------------------------------------------------------------
  // GLOBAL TOKENS (Shared across Light & Dark)
  // ----------------------------------------------------------------------
  global: {
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '4rem', // 64px (Page level whitespace for "Calm")
    },
    borderRadius: {
      // Microsoft Fluent uses slightly squarer corners than Apple
      sm: '4px',
      base: '6px',
      md: '8px',
      lg: '10px',
      full: '9999px',
    },
    typography: {
      fontFamily:
        '"Segoe UI Variable", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
      fontFamilyMono: '"Cascadia Code", "Fira Code", monospace',
      fontFamilySerif: 'Cascadia Code',
      fontSize: {
        xs: '11px',
        sm: '12px',
        base: '14px',
        md: '14px',
        lg: '16px',
        xl: '18px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '30px',
        '5xl': '35px',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600, // Fluent uses 600 for semibold
        bold: 700,
      },
      lineHeight: {
        tight: 1.25, // Slightly looser than Apple
        normal: 1.6,
        relaxed: 1.8,
      },
      letterSpacing: {
        normal: '0.2rem',
        tight: ' 0.4rem',
        tighter: '0.3rem',
        wide: '0.3rem',
      },
    },
    // Standardized Breakpoints
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    // Standardized Z-Indices
    zIndices: {
      base: 0,
      nav: 10,
      overlay: 20,
      popover: 30,
      modal: 40,
      toast: 50,
    },
    // Fluent Design Motion (Decelerate curve)
    animation: {
      fast: '150ms cubic-bezier(0, 0, 0.2, 1)',
      normal: '300ms cubic-bezier(0, 0, 0.2, 1)',
      slow: '500ms cubic-bezier(0, 0, 0.2, 1)',
    },
  },

  // ----------------------------------------------------------------------
  // THEME SPECIFIC (Paint)
  // ----------------------------------------------------------------------
  modes: {
    light: {
      colors: {
        primary: {
          50: '#E6FBF7',
          100: '#C9F4ED',
          500: '#008272', // Fluent Teal
          600: '#006D5F',
          700: '#00574C',
        },
        gray: {
          50: '#FAFAF9',
          100: '#F8F9FA',
          200: '#EDEBE9',
          300: '#D2D0CE',
          400: '#A8A29E',
          500: '#6B6A69',
          600: '#57534E',
          700: '#3B3A39',
          900: '#1B1A19',
        },
        background: {
          primary: '#FFFFFF',
          secondary: '#F8F9FA',
          tertiary: '#EEF1F3',
          muted: '#F8F9FA', // Mapped to secondary
        },
        text: {
          primary: '#1B1A19',
          secondary: '#3B3A39',
          tertiary: '#6B6A69',
          muted: '#6B6A69', // Mapped to tertiary for helper text
        },
        border: {
          default: '#D2D0CE', // Mapped to gray.300
        },
        state: {
          success: '#107C10',
          error: '#C50F1F',
          warning: '#CA5010',
          info: '#0063B1',
        },
      },
      shadows: {
        sm: '0 1px 1px rgba(0,0,0,0.06)',
        md: '0 4px 12px rgba(0,0,0,0.12)',
        lg: '0 12px 24px rgba(0,0,0,0.18)',
      },
    },

    dark: {
      colors: {
        primary: {
          50: '#06201C',
          100: '#0B3A33',
          500: '#00B294', // Vivid Teal for Dark mode
          600: '#009A82',
          700: '#007C67',
        },
        gray: {
          50: '#FAFAF9',
          100: '#1F2329',
          200: '#2A2E34',
          300: '#3B3F45',
          400: '#A8A29E',
          500: '#9B9A99',
          600: '#57534E',
          700: '#D2D0CE',
          900: '#FFFFFF',
        },
        background: {
          primary: '#0F1115',
          secondary: '#16181D',
          tertiary: '#1F2329',
          muted: '#16181D', // Mapped to secondary
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#C8C6C4',
          tertiary: '#9B9A99',
          muted: '#9B9A99', // Mapped to tertiary
        },
        border: {
          default: '#3B3F45', // Mapped to gray.300 (sufficient contrast on #0F1115)
        },
        state: {
          success: '#6BB700',
          error: '#F1707B',
          warning: '#FCE100',
          info: '#3A96DD',
        },
      },
      shadows: {
        sm: '0 1px 2px rgba(0,0,0,0.4)',
        md: '0 6px 16px rgba(0,0,0,0.6)',
        lg: '0 16px 32px rgba(0,0,0,0.8)',
      },
    },
  },
}

export default MicrosoftTheme
