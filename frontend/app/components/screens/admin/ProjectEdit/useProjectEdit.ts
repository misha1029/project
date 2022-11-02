import { getAdminUrl } from 'config/url.config'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { ProjectService } from 'services/project.service'
import { getKeys } from 'utils/object/getKeys'
import { toastrError } from 'utils/toastrError/toastrError'
import { IProjectEditInput } from './project-edit.interface'



export const useProjectEdit = (setValue: UseFormSetValue<IProjectEditInput>) => {

	const { push, query } = useRouter()

	const projectId = String(query.id)

	const { isLoading } = useQuery(
		['project', projectId],
		() => ProjectService.getById(projectId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastrError(error, 'Get project')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update project',
		(data: IProjectEditInput) => ProjectService.update(projectId, data),
		{
			onError: (error) => {
				toastrError(error, 'Get project')
			},
			onSuccess() {
				toastr.success('Update project', 'update was successfull')
                push(getAdminUrl('projects'))
			},
		}
	)

	const onSubmit: SubmitHandler<IProjectEditInput> = async (data) => {
		await mutateAsync(data)
	}

    return {onSubmit, isLoading}
}
