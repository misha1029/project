import { siteName, titleMerge } from 'config/seo.config'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { ISeo } from './meta.intarface'

export const Meta: FC<ISeo> = ({ title, description, image, children }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp="headerline">{titleMerge(title)}</title>
			</Head>
            {children}
		</>
	)
}
