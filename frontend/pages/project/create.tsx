import { ProjectCreate } from 'components/screens/project/ProjectCreate/ProjectCreate'
import React from 'react'
import { NextPageAuth } from 'shared/types/auth.types'

const CreatePage: NextPageAuth = () => {
	return (
		<>
			<ProjectCreate />
		</>
	)
}

CreatePage.isOnlyUser = true

export default CreatePage
