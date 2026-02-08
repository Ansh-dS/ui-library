// Left: spacing, boder radius, animation, shadows.
// Left1: dark portion:
//        problems i felt:
//          1. didn't use mathematical way but token swap with optimalneess for readabiity.
//          2. the dark theem the text feel more thick so learnt 'Irradiation' or 'Halation':
//                i increase 'lineHeight' and 'letter spacing':
//                  so our text expands and gets readable again.

/* problem:
   what does the sites do when we they are buidling their dark theme to avoid( fully )  below: 
    a.High Contrast Halation. 
    b.Irradiation: 
      i. reduces the weight in dark theme.
      ii. changes the text color (only secodary ..) by adding opacity.
*/
import { DesignSystem } from '../tokenDefinition'

const TallyTheme: DesignSystem = {
  // ----------------------------------------------------------------------
  // GLOBAL TOKENS (Responsive & Accessible)
  // ----------------------------------------------------------------------
  global: {
    // Spacing: Using 8pt Grid System (multiples of 0.5rem/8px) with 4pt half-steps.
    // Using 'rem' ensures layout scales if user changes browser font size.
    spacing: {
      xs: '0.25rem', // 4px  (Icon gap / tightest padding)
      sm: '0.5rem', // 8px  (Standard component padding)
      md: '0.75rem', // 12px (Form gaps)
      lg: '1rem', // 16px (Card padding)
      xl: '1.5rem', // 24px (Section separation)
      '2xl': '2rem', // 32px (Major layout breaks)
      '3xl': '4rem', // 64px (Page level whitespace for "Calm")
    },

    // Border Radius: Concentric Corner Rule (Tight radii for "Document" feel)
    borderRadius: {
      sm: '0.125rem', // 2px  (Checkboxes, Inputs - Precise)
      base: '0.25rem', // 4px  (Buttons, Badges - Professional)
      md: '0.375rem', // 6px  (Small Cards)
      lg: '0.5rem', // 8px  (Modals, Large Containers)
      full: '9999px', // (Avatars, Pills)
    },

    typography: {
      // 1. Font Families (Display vs Body vs Code)
      fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

      // Essential for the "Document/Paper" mode of Tally
      fontFamilySerif:
        '"Charter", "Bitstream Charter", "Sitka Text", Cambria, serif',

      fontFamilyMono: '"Fira Code", "Monaco", "Consolas", monospace',

      // 2. Size Scale (Refined for "Editorial" Hierarchy & Accessibility)
      fontSize: {
        xs: '0.75rem', // 12px - Label / Metadata
        sm: '0.8125rem', // 13px - UI Elements (Sidebar)
        base: '0.875rem', // 14px - UI Body (Popovers, Settings)
        md: '1rem', // 16px - DOCUMENT BODY (Standard)
        lg: '1.125rem', // 18px - Subheaders
        xl: '1.25rem', // 20px - H3
        '2xl': '1.5rem', // 24px - H2
        '3xl': '1.875rem', // 30px - Modal Titles
        '4xl': '2.25rem', // 36px - H1
        '5xl': '3rem', // 48px - Hero Title
      },

      // 3. Weights
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },

      // 4. Line Height
      lineHeight: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.75, // "Calm Focus" reading
      },

      // 5. Letter Spacing
      letterSpacing: {
        tighter: '-0.025em',
        tight: '-0.01em',
        normal: '0em',
        wide: '0.025em',
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

    // Animation: Snappy Physics (Duration-Easing Matrix)
    animation: {
      // Instant feedback for hover (Color changes)
      fast: '100ms ease-out',
      // Smooth movement for dropdowns (Custom snappy curve)
      normal: '200ms cubic-bezier(0.2, 0, 0, 1)',
      // Layout shifts or modals
      slow: '300ms cubic-bezier(0.2, 0, 0, 1)',
    },
  },

  // ----------------------------------------------------------------------
  // THEME SPECIFIC (The "Neel" & "Malmal" Palette)
  // ----------------------------------------------------------------------
  modes: {
    light: {
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          500: '#4338CA', // Neel
          600: '#3730A3',
          700: '#312E81',
        },
        gray: {
          50: '#FAFAF9', // ADDED: Needed for Background Primary
          100: '#F5F5F4', // Stone-100
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E', // ADDED: Needed for Text Tertiary/Muted
          500: '#78716C',
          600: '#57534E', // ADDED: Needed for Text Secondary
          700: '#44403C',
          900: '#1C1917', // Surma
        },
        background: {
          primary: '#FAFAF9', // Maps to Gray-50
          secondary: '#F5F5F4', // Maps to Gray-100
          tertiary: '#E7E5E4', // Maps to Gray-200
          muted: '#F5F5F4', // Maps to Gray-100
        },
        text: {
          primary: '#1C1917', // Maps to Gray-900
          secondary: '#57534E', // Maps to Gray-600
          tertiary: '#A8A29E', // Maps to Gray-400
          muted: '#A8A29E', // Maps to Gray-400
        },
        border: {
          default: '#E7E5E4', // Maps to Gray-200
        },
        state: {
          success: '#15803D', // Mungia
          error: '#B91C1C',
          warning: '#D97706', // Saffron
          info: '#4338CA',
        },
      },

      // Shadows: "Ambient Light" Model
      // Using 'rem' for offset to scale with layout.
      // Tinted with Stone-900 (28, 25, 23) for warmth.
      shadows: {
        // Subtle lift (Cards)
        sm: '0 0.0625rem 0.125rem rgba(28, 25, 23, 0.05)',
        // Floating (Popovers) - Key light + Ambient light layers
        md: '0 0.25rem 0.375rem -0.0625rem rgba(28, 25, 23, 0.08), 0 0.125rem 0.25rem -0.0625rem rgba(28, 25, 23, 0.04)',
        // High elevation (Modals)
        lg: '0 0.625rem 0.9375rem -0.1875rem rgba(28, 25, 23, 0.1), 0 0.25rem 0.375rem -0.125rem rgba(28, 25, 23, 0.05)',
      },
    },

    dark: {
      colors: {
        // Optical Correction: Lighter & "Pastel" for visibility
        primary: {
          50: '#1E1B4B',
          100: '#312E81',
          500: '#6366F1', // Brighter Indigo
          600: '#818CF8', // Hover "Glow"
          700: '#A5B4FC',
        },
        // Surma Scale (Warm Charcoal)
        gray: {
          50: '#FAFAF9', // Lightest (Text Base)
          100: '#1C1917', // Dark Surface (Secondary)
          200: '#292524', // Dark Surface (Tertiary)
          300: '#44403C',
          400: '#A8A29E', // Muted Text Base
          500: '#78716C',
          600: '#57534E',
          700: '#D6D3D1',
          900: '#FAFAF9', // High Contrast Text
        },
        background: {
          primary: '#0C0A09', // Stone-950 (Warm Black)
          secondary: '#1C1917', // Inverted Elevation (Lighter)
          tertiary: '#292524',
          muted: '#1C1917',
        },
        text: {
          // 1. PRIMARY: Keep Solid (For maximum readability of Titles)
          primary: '#FAFAF9',

          // 2. SECONDARY: 70% Opacity (Standard for Body Text)
          // Replaces #D6D3D1. This reduces glare significantly.
          secondary: 'rgba(250, 250, 249, 0.7)',

          // 3. TERTIARY: 50% Opacity (For Icons/Metadata)
          // Replaces #A8A29E.
          tertiary: 'rgba(250, 250, 249, 0.5)',

          // 4. MUTED: 40% Opacity (Disabled states)
          muted: 'rgba(250, 250, 249, 0.4)',
        },
        border: {
          default: '#292524',
        },
        state: {
          success: '#22C55E',
          error: '#EF4444',
          warning: '#F59E0B',
          info: '#6366F1',
        },
      },

      // ------------------------------------------------
      // OPTICAL CORRECTION FOR TYPOGRAPHY
      // ------------------------------------------------
      // Fixes "Irradiation" (Glowing text looks thicker)
      typography: {
        lineHeight: {
          relaxed: 1.85, // Increased +0.1 for breathing room
        },
        letterSpacing: {
          normal: '0.01em', // Increased to separate glowing letters
        },
        fontWeight: {
          normal: 350,
          medium: 450,
        },
        fontSmoothing: true,
      },

      // Dark Mode Shadows:
      // Darker/higher opacity to be visible on black.
      shadows: {
        sm: '0 0.0625rem 0.125rem rgba(0, 0, 0, 0.4)',
        md: '0 0.25rem 0.375rem rgba(0, 0, 0, 0.6)',
        lg: '0 0.625rem 0.9375rem rgba(0, 0, 0, 0.8)',
      },
    },
  },
}

export default TallyTheme
