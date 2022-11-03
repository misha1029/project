import { ICategoryEditInput } from 'components/screens/project/ProjectEdit/project-edit.interface'
import { getCategorysUrl } from 'config/api.config'
import { ICategory } from 'shared/types/project.types'

import axios from '../api/interceptors'

export const CategoryService = {
	async getAll() {
		return axios.get<ICategory[]>(getCategorysUrl(``))
	},

	async create(data: ICategoryEditInput) {
		return axios.post<string>(getCategorysUrl(''), data)
	},

	async update(_id: string, data: ICategoryEditInput) {
		return axios.put<string>(getCategorysUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		const result = confirm('Want to delete?')
		if (result) {
			return axios.delete<string>(getCategorysUrl(`/${_id}`))
		}
	},
}
