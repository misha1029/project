import { axiosClassic } from 'api/interceptors'
import { IProjectEditInput } from 'components/screens/admin/ProjectEdit/project-edit.interface'
import { getProjectsUrl } from 'config/api.config'
import { IProject } from 'shared/types/project.types'

import axios from '../api/interceptors'

export const ProjectService = {
	async getAll() {
		return axiosClassic.get<IProject[]>(getProjectsUrl(``))
	},

	async getByName(name: string) {
		return axiosClassic.get<IProject>(getProjectsUrl(`/by-slug/${name}`))
	},

	async delete(_id: string) {
		const result = confirm('Want to delete?')
		if (result) {
			return axios.delete<string>(getProjectsUrl(`/${_id}`))
		}
	},

	async getById(_id: string) {
		return axios.get<IProjectEditInput>(getProjectsUrl(`/${_id}`))
	},

	async update(_id: string, data: IProjectEditInput) {
		return axios.put<string>(getProjectsUrl(`/${_id}`), data)
	},

	async create() {
		return axios.post<string>(getProjectsUrl('/'))
	},
}
