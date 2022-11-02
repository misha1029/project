import { Heading } from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import { Meta } from 'utils/meta/Meta'

import { HeaderProject } from '../HeaderProject/HeaderProject'
import { Table } from '../AdminTable/Table'

import { useProjects } from './useProjects'

export const ProjectList: FC = () => {
	const {
		handleSearch,
		isLoading,
		data,
		deleteAsync,
		createAsync,
	} = useProjects()
	console.log(data, 'datadatadatadata')
	
	return (
		<Meta title="Projects">
			<Heading title="Projects" />

			<HeaderProject
				handleSearch={handleSearch}
				onClick={createAsync}
			/>

			<Table
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Description']}
				tableItem={data || []}
			/>
		</Meta>
	)
}
