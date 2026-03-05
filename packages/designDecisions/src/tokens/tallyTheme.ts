// Left: spacing, border radius, animation, shadows.
// Left1: dark portion:
//        problems i felt:
//          1. didn't use mathematical way but token swap with optimalness for readability.
//          2. the dark theme the text feels more thick so learnt 'Irradiation' or 'Halation':
//                i increased 'lineHeight' and 'letter spacing':
//                  so our text expands and gets readable again.

/* problem:
   what do sites do when they are building their dark theme to avoid (fully) below: 
    a. High Contrast Halation. 
    b. Irradiation: 
      i. reduces the weight in dark theme.
      ii. changes the text color (only secondary ..) by adding opacity.
*/
import { DesignSystem } from '../tokenDefinition'

const TallyTheme: DesignSystem = {
  // ----------------------------------------------------------------------
  // GLOBAL TOKENS (Responsive & Accessible)
  // ----------------------------------------------------------------------
  global: {
    // Spacing: Using 8pt Grid System (multiples of 0.5rem/8px) with 4pt half-steps.
    spacing: {
      xs: '0.25rem', // 4px  (Icon gap / tightest padding)
      sm: '0.5rem', // 8px  (Standard component padding)
      md: '0.75rem', // 12px (Form gaps)
      lg: '1rem', // 16px (Card padding)
      xl: '1.5rem', // 24px (Section separation)
      '2xl': '2rem', // 32px (Major layout breaks)
      '3xl': '4rem', // 64px (Page level whitespace for "Calm")
    },

    // Border Radius: Concentric Corner Rule
    borderRadius: {
      sm: '0.125rem', // 2px  (Checkboxes, Inputs - Precise)
      base: '0.25rem', // 4px  (Buttons, Badges - Professional)
      md: '0.375rem', // 6px  (Small Cards)
      lg: '0.5rem', // 8px  (Modals, Large Containers)
      full: '9999px', // (Avatars, Pills)
    },

    typography: {
      fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      // The "Pristine Document" feel
      fontFamilySerif:
        '"Charter", "Bitstream Charter", "Sitka Text", Cambria, serif',
      fontFamilyMono: '"Fira Code", "Monaco", "Consolas", monospace',

      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.8125rem', // 13px
        base: '0.875rem', // 14px
        md: '1rem', // 16px - DOCUMENT BODY
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
      },

      lineHeight: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.75, // "Alpine Calm" reading
      },

      letterSpacing: {
        tighter: '-0.025em',
        tight: '-0.01em',
        normal: '0em',
        wide: '0.025em',
        widest: '0.05em',
      },
    },

    breakpoints: {
      sm: '40rem', // 640px
      md: '48rem', // 768px
      lg: '64rem', // 1024px
      xl: '80rem', // 1280px
      '2xl': '96rem', // 1536px
    },

    zIndices: {
      base: 0,
      nav: 10,
      overlay: 20,
      popover: 30,
      modal: 40,
      toast: 50,
    },

    animation: {
      fast: '100ms ease-out',
      normal: '200ms cubic-bezier(0.2, 0, 0, 1)',
      slow: '300ms cubic-bezier(0.2, 0, 0, 1)',
    },
  },

  // ----------------------------------------------------------------------
  // THEME SPECIFIC: "Kashmir Alpine" Edition
  // ----------------------------------------------------------------------
  modes: {
    light: {
      colors: {
        // Alpine Blue: Deep, cold, trustworthy like a glacial lake
        primary: {
          50: '#F0F9FF', // Icy mist
          100: '#E0F2FE',
          500: '#0284C7', // Dal Lake Blue (Main Brand)
          600: '#0369A1',
          700: '#075985', // Deep Water
        },
        // Kashmiri Saffron: Warm, striking contrast
        accent: {
          500: '#EA580C',
        },
        // Slate Scale: Cool, rocky neutrals instead of warm brown/grays
        neutral: {
          50: '#F8FAFC', // Fresh Snow (Crisp Paper Base)
          100: '#F1F5F9', // Light Frost
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8', // Muted Text
          500: '#64748B',
          600: '#475569', // Secondary Text
          700: '#334155',
          900: '#0F172A', // Himalayan Rock (Almost black)
        },
        background: {
          primary: '#F8FAFC', // Maps to neutral-50
          secondary: '#F1F5F9', // Maps to neutral-100
          tertiary: '#E2E8F0', // Maps to neutral-200
          muted: '#F1F5F9',
        },
        text: {
          primary: '#0F172A', // Maps to neutral-900
          secondary: '#475569', // Maps to neutral-600
          tertiary: '#94A3B8', // Maps to neutral-400
          muted: '#94A3B8',
        },
        border: {
          default: '#E2E8F0', // Maps to neutral-200
          focus: '#0284C7', // Maps to primary-500
        },
        state: {
          success: '#059669', // Pine Green
          error: '#DC2626', // Chinar Red
          warning: '#EA580C', // Saffron
          info: '#0284C7', // Alpine Blue
        },
      },

      typography: {
        lineHeight: { relaxed: 1.75 },
        letterSpacing: { normal: '0em' },
        fontWeight: {
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
        },
        fontSmoothing: false,
      },

      // Shadows: Tinted with deep blue/slate (15, 23, 42) for crisp, cold air feel
      shadows: {
        sm: '0 0.0625rem 0.125rem rgba(15, 23, 42, 0.04)',
        md: '0 0.25rem 0.375rem -0.0625rem rgba(15, 23, 42, 0.08), 0 0.125rem 0.25rem -0.0625rem rgba(15, 23, 42, 0.03)',
        lg: '0 0.625rem 0.9375rem -0.1875rem rgba(15, 23, 42, 0.1), 0 0.25rem 0.375rem -0.125rem rgba(15, 23, 42, 0.04)',
        xl: '0 1.25rem 1.5625rem -0.3125rem rgba(15, 23, 42, 0.1), 0 0.625rem 0.625rem -0.3125rem rgba(15, 23, 42, 0.03)',
        inner: 'inset 0 2px 4px 0 rgba(15, 23, 42, 0.05)',
      },
    },

    dark: {
      colors: {
        // Optical Correction: Glowing frost/ice against the night
        primary: {
          50: '#082F49',
          100: '#0C4A6E',
          500: '#38BDF8', // Bright Ice Cyan
          600: '#7DD3FC', // Hover "Glow"
          700: '#BAE6FD',
        },
        accent: {
          500: '#FDBA74', // Glowing Saffron
        },
        // Winter Night Scale
        neutral: {
          50: '#F8FAFC', // Text Base (Snow)
          100: '#0F172A', // Dark Surface (Secondary)
          200: '#1E293B', // Dark Surface (Tertiary)
          300: '#334155',
          400: '#94A3B8', // Muted Text
          500: '#64748B',
          600: '#475569',
          700: '#CBD5E1',
          900: '#F8FAFC', // High Contrast Text
        },
        background: {
          primary: '#020617', // Deepest Winter Night (Slate-950)
          secondary: '#0F172A', // Elevated Surface
          tertiary: '#1E293B',
          muted: '#0F172A',
        },
        text: {
          primary: '#F8FAFC',
          secondary: 'rgba(248, 250, 252, 0.7)', // Reduces glare on dark blue
          tertiary: 'rgba(248, 250, 252, 0.5)',
          muted: 'rgba(248, 250, 252, 0.4)',
        },
        border: {
          default: '#1E293B',
          focus: '#38BDF8',
        },
        state: {
          success: '#34D399',
          error: '#F87171',
          warning: '#FBBF24',
          info: '#38BDF8',
        },
      },

      // OPTICAL CORRECTION FOR TYPOGRAPHY
      typography: {
        lineHeight: {
          relaxed: 1.85,
        },
        letterSpacing: {
          normal: '0.01em',
        },
        fontWeight: {
          normal: 350,
          medium: 450,
          semibold: 550,
          bold: 650,
        },
        fontSmoothing: true,
      },

      // Dark Mode Shadows: Black tints for visibility against deep blue/slate
      shadows: {
        sm: '0 0.0625rem 0.125rem rgba(0, 0, 0, 0.5)',
        md: '0 0.25rem 0.375rem rgba(0, 0, 0, 0.7)',
        lg: '0 0.625rem 0.9375rem rgba(0, 0, 0, 0.9)',
        xl: '0 1.25rem 1.5625rem rgba(0, 0, 0, 1)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.6)',
      },
    },
  },
}

export default TallyTheme
