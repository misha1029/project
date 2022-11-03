import { ProjectInformation } from 'components/screens/project/ProjectInformation'
import React, { FC } from 'react'
import { NextPageAuth } from 'shared/types/auth.types'

const ProjectPage: NextPageAuth = () => {
	return (
		<>
			<ProjectInformation />
		</>
	)
}

ProjectPage.isOnlyUser = true

export default ProjectPage
