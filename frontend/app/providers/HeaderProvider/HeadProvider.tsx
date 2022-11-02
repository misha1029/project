import { accentColor } from 'config/constants'
import Head from 'next/head'
import NextProgressBar from 'nextjs-progressbar'
import React, { FC, ReactNode } from 'react'

import FavIcons from './Fovicons'

interface HeadProviderProps {
	children: ReactNode
}

export const HeadProvider: FC<HeadProviderProps> = ({ children }) => {
	return (
		<>
			<NextProgressBar
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={1}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>
				<FavIcons />
				<meta name="theme-color" content={'#181B1E'} />
				<meta name="msapplication-navbutton-color" content={'#181B1E'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#181B1E'}
				/>
			</Head>
			{children}
		</>
	)
}
