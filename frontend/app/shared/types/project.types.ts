import { TypeMaterialIconName } from './icons.types'

export interface IProject {
	_id: string
	name: string
	description: string
	category: ICategory[]

	slug: string
}
export interface ICategory {
	_id: string
	text: string
}
