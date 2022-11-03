import { Heading } from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import { Meta } from 'utils/meta/Meta'

import { HeaderProject } from '../HeaderProject/HeaderProject'
import { Table } from '../Table/Table'

import { useProjects } from './useProjects'
import { useRouter } from 'next/router'
import { getAdminUrl } from 'config/url.config'

export const ProjectList: FC = () => {
	const {
		handleSearch,
		isLoading,
		data,
		deleteAsync,
	} = useProjects()

	const {push} = useRouter()
	
	const openCreateProjectPage = () => {
		push(getAdminUrl('create'))
	}

	return (
		<Meta title="Projects">
			<Heading title="Projects" />

			<HeaderProject
				handleSearch={handleSearch}
				onClick={openCreateProjectPage}
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
