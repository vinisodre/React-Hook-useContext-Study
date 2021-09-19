import { createContext } from 'react'

export const themes = {
  primary: {
    background: 'blue',
    color: 'orange'
  },
  secondary: {
    background:'black',
    color: 'white'
  }
}

export const ThemeContext = createContext(themes.primary)