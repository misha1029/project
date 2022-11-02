import { ProjectList } from 'components/screens/admin/project/ProjectList'
import React from 'react'
import { NextPageAuth } from 'shared/types/auth.types'

const ProjectListPage: NextPageAuth = () => {
	return <ProjectList />
}

ProjectListPage.isOnlyUser = true

export default ProjectListPage
