import { prop, Ref } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { ProjectModel } from 'src/project/project.model'


export interface CategoryEntity extends Base {}

export class CategoryEntity extends TimeStamps {
	@prop({ unique: true })
	text: string
    
	@prop({ ref: () => ProjectModel })
	projects: Ref<ProjectModel>[]
}