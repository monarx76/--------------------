'use client'

import { theme } from '@/theme/theme'
import { ThemeProvider } from '@emotion/react'
import { FC } from 'react'

interface ProvidersProps {
	children: React.ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Providers
