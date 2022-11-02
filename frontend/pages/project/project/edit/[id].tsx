
import { ProjectEdit } from 'components/screens/admin/ProjectEdit/ProjectEdit'
import React from 'react'
import { NextPageAuth } from 'shared/types/auth.types'

const ProjectEditPage: NextPageAuth = () => {
	return <ProjectEdit />
}

ProjectEditPage.isOnlyUser = true

export default ProjectEditPage
