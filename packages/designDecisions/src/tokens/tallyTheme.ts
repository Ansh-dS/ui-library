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
          500: '#0369A1',
          600: '#075985', // Deep Water (Hover)
          700: '#034666', // Midnight Depth (Pressed)
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
          // In Light Mode: Pure White for text on Dal Lake Blue backgrounds
          inverted: '#FFFFFF',
        },
        border: {
          default: '#CBD5E1',
          focus: '#0284C7', // Alpine Blue (Kept as is)
          // Added a stronger border for inputs/interactive elements needing higher contrast accessibility.
          strong: '#94A3B8', // Maps to neutral-400
        },
        state: {
          success: '#059669', // Pine Green
          error: '#DC2626', // Chinar Red
          warning: '#EA580C', // Saffron
          info: '#0284C7', // Alpine Blue
          successSubtle: 'rgba(5, 150, 105, 0.08)',
          errorSubtle: 'rgba(220, 38, 38, 0.08)',
          warningSubtle: 'rgba(234, 88, 12, 0.08)',
          infoSubtle: 'rgba(2, 132, 199, 0.08)',
        },
        action: {
          primarySubtle: 'rgba(3, 105, 161, 0.08)', // 8% of Primary 500 (#0369A1)
          primaryHover: 'rgba(3, 105, 161, 0.12)', // Slightly stronger for hover
          secondarySubtle: 'rgba(71, 85, 105, 0.06)', // 6% of Neutral 600 (#475569)
          ghostHover: 'rgba(15, 23, 42, 0.04)', // 4% of Neutral 900 for transparent buttons
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
      // Layered Shadows: Uses negative spread to tuck the blur under the border for a crisp hairline edge.
      shadows: {
        sm: '0 1px 2px -1px rgba(15, 23, 42, 0.1), 0 1px 3px 0 rgba(15, 23, 42, 0.05)',
        md: '0 4px 6px -2px rgba(15, 23, 42, 0.1), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
        lg: '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -4px rgba(15, 23, 42, 0.05)',
        xl: '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)',
        inner: 'inset 0 2px 4px 0 rgba(15, 23, 42, 0.06)',
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
          // In Dark Mode: Deep Night Slate (#020617) for text on Ice Cyan backgrounds.
          // This stops the "Halation" effect you are fighting.

          inverted: '#020617',
        },
        border: {
          default: '#334155',
          focus: '#38BDF8', // Bright Ice Cyan (Kept as is)
          // Added for higher contrast elements like form inputs so they don't get lost in the dark.
          strong: '#475569', // Maps to neutral-600
        },
        state: {
          success: '#34D399',
          error: '#F87171',
          warning: '#FBBF24',
          info: '#38BDF8',
          successSubtle: 'rgba(52, 211, 153, 0.12)', // Increased to 12% for dark mode contrast
          errorSubtle: 'rgba(248, 113, 113, 0.12)',
          warningSubtle: 'rgba(251, 191, 36, 0.12)',
          infoSubtle: 'rgba(56, 189, 248, 0.12)',
        },
        action: {
          primarySubtle: 'rgba(56, 189, 248, 0.12)', // 12% of Primary 500 (#38BDF8) - needs more alpha on dark
          primaryHover: 'rgba(56, 189, 248, 0.16)',
          secondarySubtle: 'rgba(148, 163, 184, 0.10)', // 10% of Neutral 400 (#94A3B8)
          ghostHover: 'rgba(248, 250, 252, 0.06)', // 6% of Snow (#F8FAFC)
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

      // Pure Umbra Chasm: Uses high-opacity black to create a sharp depth gap between the border and background.
      shadows: {
        sm: '0 1px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 3px 0 rgba(0, 0, 0, 0.4)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.6), 0 2px 4px -2px rgba(0, 0, 0, 0.5)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.7), 0 4px 6px -4px rgba(0, 0, 0, 0.6)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.8), 0 8px 10px -6px rgba(0, 0, 0, 0.7)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.6)',
      },
    },
  },
}

export default TallyTheme
