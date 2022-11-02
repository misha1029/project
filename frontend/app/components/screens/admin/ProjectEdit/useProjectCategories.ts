import { IOption } from 'components/ui/select/select.interface'
import { useQuery } from 'react-query'
import { CategoryService } from 'services/category.service'
import { toastrError } from 'utils/toastrError/toastrError'

export const useAdminCategory = () => {
	const queryData = useQuery('List actor', () => CategoryService.getAll(), {
		select: ({ data }) =>
			data.map(
				(category): IOption => ({
					label: category.text,
					value: category._id,
				})
			),
		onError: (error) => {
			toastrError(error, 'Category list')
		},
	})

	return queryData
}
