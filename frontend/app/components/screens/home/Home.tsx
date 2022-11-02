import { Heading } from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import { Meta } from 'utils/meta/Meta'


export const Home: FC= () => {
	return (
		<Meta
			title="Project"
			description="Watch moviesApp online and TV shows online or stream to you browser"
		>
			<Heading title="Project" className="mb-8 text-xl" />
		</Meta>
	)
}
