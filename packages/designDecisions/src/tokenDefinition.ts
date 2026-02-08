// shouldn't change even if we change the mode of a theme.
export type GlobalTokens = {
  spacing: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl', string>
  borderRadius: Record<'sm' | 'base' | 'md' | 'lg' | 'full', string>
  //DONE.
  typography: {
    fontFamily: string
    fontFamilyMono: string
    fontFamilySerif: string
    fontSize: Record<
      'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl',
      string
    >
    fontWeight: Record<'normal' | 'medium' | 'semibold' | 'bold', number>
    lineHeight: Record<'tight' | 'normal' | 'relaxed', number | string>
    letterSpacing: Record<'tighter' | 'tight' | 'normal' | 'wide', string>
  }
  // New standardized layers
  // DONE
  breakpoints: Record<'sm' | 'md' | 'lg' | 'xl' | '2xl', string>
  zIndices: Record<
    'base' | 'nav' | 'overlay' | 'modal' | 'toast' | 'popover',
    number
  >

  animation: Record<'fast' | 'normal' | 'slow', string>
}

// change based on the mode of the theme.
export type ThemeTokens = {
  // DONE
  colors: {
    primary: Record<50 | 100 | 500 | 600 | 700, string>
    gray: Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 900, string>
    background: {
      primary: string
      secondary: string
      tertiary: string
      muted: string // Added
    }
    text: {
      primary: string
      secondary: string
      tertiary: string
      muted: string // Added
    }
    border: {
      // Added
      default: string
    }
    state: {
      // Grouped for cleaner access
      success: string
      error: string
      warning: string
      info: string
    }
  }
  typography?: {
    lineHeight: { relaxed: number | string }
    letterSpacing: { normal: string }
    fontWeight: Record<'normal' | 'medium', number>
    fontSmoothing?: boolean
  }

  shadows: Record<'sm' | 'md' | 'lg', string>
}

// 3. The Master Definition
export type DesignSystem = {
  global: GlobalTokens
  modes: {
    light: ThemeTokens
    dark: ThemeTokens
  }
}
