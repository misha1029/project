export interface IProject {
	_id: string
	name: string
	description: string
}
export interface ICategory {
	_id: string
	text: string
	projectId: string | ''
}
