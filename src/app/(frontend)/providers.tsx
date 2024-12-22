import { ThemeProvider } from '@/features/theme'
import React from 'react'

type ProvidersProps = {} & React.PropsWithChildren

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}
