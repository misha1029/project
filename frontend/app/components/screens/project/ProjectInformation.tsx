import React, { FC } from 'react'
import { Meta } from 'utils/meta/Meta'
import { ProjectList } from './project/ProjectList'

export const ProjectInformation: FC = () => {
	return (
		<Meta title="Project statistic">
			<ProjectList/>
		</Meta>
	)
}
