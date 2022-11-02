
import { getAdminUrl } from 'config/url.config'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { CategoryService } from 'services/category.service'
import { ProjectService } from 'services/project.service'

import { toastrError } from 'utils/toastrError/toastrError'

import { ITableItem } from '../AdminTable/table.interface'

export const useProjects = () => {
	const [searchTerm, setSearchTerm] = useState('')

	

	const queryData = useQuery(
		['project list'],
		() => ProjectService.getAll(),
		{
			select: ({ data }) =>
				data.map(
					(project): ITableItem => ({
						_id: project._id,
						editUrl: getAdminUrl(`project/edit/${project._id}`),
						items: [project.name, project.description],
					})
				),
			onError: (error) => {
				toastrError(error, 'Project list')
			},
		}
        
	)
    

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete project',
		(projectId: string) => ProjectService.delete(projectId),
		{
			onError: (error) => {
				toastrError(error, 'delete project')
			},
            onSuccess: () => {
                toastr.success('Delete project', 'delete was successful')
                queryData.refetch()
            }
		}
	)

	const {push} = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create project',
		() => ProjectService.create(),
		{
			onError: (error) => {
				toastrError(error, 'create project')
			},
            onSuccess: ({data:_id}) => {
                toastr.success('Create project', 'create was successful')
                push(getAdminUrl(`project/edit/${_id}`))
            }
		}
	)


    return useMemo(() => ({
        handleSearch, ...queryData, searchTerm, deleteAsync, createAsync
    }), [queryData,searchTerm, deleteAsync, createAsync ])
}
