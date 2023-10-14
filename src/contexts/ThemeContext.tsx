import { FC, ReactNode, createContext, useState } from 'react'
import { IThemeContext, themeType } from '../types'

export const ThemeContext = createContext<IThemeContext | null>(null)

const getPreferredTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  return 'light'
}

const getTheme = () => {
  const storedTheme = localStorage.getItem('theme')
  const htmlElement = document.documentElement

  if (storedTheme === 'light' || storedTheme === 'dark') {
    htmlElement.setAttribute('data-theme', storedTheme)
    return storedTheme
  } else {
    const preferredTheme = getPreferredTheme()

    htmlElement.setAttribute('data-theme', preferredTheme)
    return preferredTheme
  }
}

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [theme, setTheme] = useState<themeType>(getTheme())

  const changeTheme = (theme: themeType) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
