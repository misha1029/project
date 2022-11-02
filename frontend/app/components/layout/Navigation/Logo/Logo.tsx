import { Heading } from 'components/ui/heading/Heading'
import Link from 'next/link'
import React, { FC } from 'react'


export const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-layout mb-10 block">
			<Heading title="Logo" className="mb-8 text-xl" />
			</a>
		</Link>
	)
}
