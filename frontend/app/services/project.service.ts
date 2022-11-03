import { IProjectEditInput } from 'components/screens/project/ProjectEdit/project-edit.interface'
import { getProjectsUrl } from 'config/api.config'
import { IProject } from 'shared/types/project.types'

import axios from '../api/interceptors'

export const ProjectService = {
	async getAll() {
		return axios.get<IProject[]>(getProjectsUrl(``))
	},

	async getById(_id: string) {
		return axios.get<IProjectEditInput>(getProjectsUrl(`/${_id}`))
	},

	async getByListProjectCategory(_id: string) {
		return axios.get<any>(getProjectsUrl(`/${_id}`))
	},

	async create(data: IProjectEditInput) {
		return axios.post<string>(getProjectsUrl('/'), data)
	},

	async update(_id: string, data: IProjectEditInput) {
		return axios.put<string>(getProjectsUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		const result = confirm('Want to delete?')
		if (result) {
			return axios.delete<string>(getProjectsUrl(`/${_id}`))
		}
	},
}
