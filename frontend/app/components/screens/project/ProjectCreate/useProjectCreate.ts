import { getAdminUrl } from 'config/url.config'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { ProjectService } from 'services/project.service'
import { toastrError } from 'utils/toastrError/toastrError'

import { IProjectEditInput } from '../ProjectEdit/project-edit.interface'

export const useProjectCreate = (
	
) => {
	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create project',
		(data: IProjectEditInput) => ProjectService.create(data),
		{
			onError: (error) => {
				toastrError(error, 'create project error')
			},
			onSuccess() {
				toastr.success('Create project', 'create was successfull')
				push(getAdminUrl('/'))
			},
		}
	)

	const onSubmit: SubmitHandler<IProjectEditInput> = async (data) => {
		await createAsync(data)
	}

	return { onSubmit }
}
