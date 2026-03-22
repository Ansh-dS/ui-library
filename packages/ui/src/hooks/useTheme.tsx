import React, { createContext, useContext, useEffect, useState } from 'react'
import { fi } from 'vuetify/locale'

// state variable made using useState have the same names.
interface ThemeContextType {
  theme: string
  mode: string
  setTheme: (theme: string) => void
  setMode: (mode: string) => void
}

// createContext is to avoid the prop drilling.
// here useContex is to use the value of the things defined.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// changes the themeName and mode in locaStorage.
// takes a children and return it after executing the above code and broadcasting happens
export const ThemeProvider = ({
  children,
  defaultTheme = 'tally',
  defaultMode = 'light',
}: {
  children: React.ReactNode
  defaultTheme?: string
  defaultMode?: string
}) => {
  const [theme, setTheme] = useState(defaultTheme)
  const [mode, setMode] = useState(defaultMode)

  // run only at mount
  // when user refreshes the page.
  useEffect(() => {
    const savedTheme = localStorage.getItem('data-theme-name')
    const savedMode = localStorage.getItem('data-mode')

    if (savedTheme) setTheme(savedTheme)
    if (savedMode) setMode(savedMode)
  }, [])

  // this runs whenever theme or mode changes after the DOM gets loaded.
  useEffect(() => {
    // we don't use setTheme and setMode because we are using useTheme and fetch setTheme ..
    // so we make changes in the html variable name not in the state variable values.
    document.documentElement.setAttribute('data-theme-name', theme)
    document.documentElement.setAttribute('data-mode', mode)

    localStorage.setItem('data-theme-name', theme)
    localStorage.setItem('data-mode', mode)
  }, [theme, mode])

  // themeContext.Provider broadcast the values to all the other components.
  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom Hook: so developer can able to fetch the broadcasted value.
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
