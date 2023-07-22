'use client'
import { ThemeProvider } from 'next-themes'

const Theme = ({ children }) => {
  return (
    <ThemeProvider enableSystem={false} attribute='class'>
      {children}
    </ThemeProvider>
  )
}

export default Theme
