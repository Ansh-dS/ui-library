import { useEffect } from 'react'
import type Decorator from '../decorator.js'

export default function themeDecorator(
  Component: Decorator['storyInstance'],
  context: Decorator['storyOfComponent']
) {
  // fetching out the theme and mode stored in context.globals
  // we get the default
  const { theme, mode } = context.globals as {
    theme?: string
    mode?: string
  }

  // only run when we are changing theme and mode

  // cases when we are changing stuffs:
  // 1. no value of 'theme' and 'mode',(so move to 2. )
  // 2. no localStorage.
  // 3. use default theme( 'apple' ) or mode ('light')  as mentioned below
  useEffect(() => {
    // better then if, else if we don't have theme then ask from localstorage
    // if localstorage don't have then use the default themes.
    const activeTheme =
      theme || localStorage.getItem('data-theme-name') || 'tally'
    const activeMode = mode || localStorage.getItem('data-mode') || 'light'
    // changing the 'root' values.
    document.documentElement.setAttribute('data-theme-name', activeTheme)
    document.documentElement.setAttribute('data-mode', activeMode)

    //Save to localStorage so other tabs/refreshes can find it
    localStorage.setItem('data-theme-name', activeTheme)
    localStorage.setItem('data-mode', activeMode)
  }, [theme, mode])

  return (
    <div>
      {' '}
      <Component {...context} />{' '}
    </div>
  )
}
