import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { ProjectService } from 'services/project.service'
import { toastrError } from 'utils/toastrError/toastrError'

export interface IOption {
	_id: string
	text: string
	projectId: string
	createdAt: string
	updatedAt: string
	__v: number
}

export const useAdminCategory = () => {
	const { query } = useRouter()

	const projectId = String(query.id)

	const queryData = useQuery(
		['List actor', projectId],
		() => ProjectService.getByListProjectCategory(projectId),
		{
			select: ({ data }) =>
				data.categories.map((item: IOption) => ({
					text: item.text,
					value: item._id === projectId,
				})),
			onError: (error) => {
				toastrError(error, 'Category list')
			},
		}
	)

	return queryData
}
