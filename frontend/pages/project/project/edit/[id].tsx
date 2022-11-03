import { ProjectEdit } from 'components/screens/project/ProjectEdit/ProjectEdit'
import { useAdminCategory } from 'components/screens/project/ProjectEdit/useProjectCategories'
import { Heading } from 'components/ui/heading/Heading'
import React from 'react'
import { NextPageAuth } from 'shared/types/auth.types'

const ProjectEditPage: NextPageAuth = () => {
	const { data: category } = useAdminCategory()

	return (
		<>
			<ProjectEdit />
			<Heading title="Category Project" className="mt-6 mb-4" />
			<div>
				{category ? (
					<>
						{category.map((item: any) => (
							<div className="flex" key = {item.value}>
								<span className="mt-3 text-xl font-medium border-2 rounded-md border-gray-600 py-1 px-7 hover:border-purple-700" key={item.value}>
									{item.text}
								</span>
							</div>
						))}
					</>
				) : (
					<div>NOT FOUND</div>
				)}
			</div>
		</>
	)
}

ProjectEditPage.isOnlyUser = true

export default ProjectEditPage
