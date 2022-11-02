import { getAdminUrl } from 'config/url.config'
import { useRouter } from 'next/router'
import { SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { CategoryService } from 'services/category.service'

import { toastrError } from 'utils/toastrError/toastrError'

import { ICategoryEditInput } from './project-edit.interface'

export const useCategoryEdit = (
	
) => {
	const { query } = useRouter()

	const { mutateAsync } = useMutation(
		'create category',
		(data: ICategoryEditInput) => CategoryService.create(data),
		{
			onError: (error) => {
				toastrError(error, 'create category')
			},
			onSuccess: ({ data: _id }) => {
				toastr.success('Create category', 'create was successful')
			},
		}
	)

	const onSubmit: SubmitHandler<ICategoryEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit}
}
