import { prop, Ref } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { CategoryEntity } from 'src/category/category.entity'
import { UserModel } from 'src/user/user.model'

export interface ProjectModel extends Base {}

export class ProjectModel extends TimeStamps {
	@prop()
	name: string

	@prop({ unique: true })
	description: string

	@prop({ ref: () => UserModel })
	user: Ref<UserModel>[]

	@prop({ ref: () => CategoryEntity })
	category: Ref<CategoryEntity>[]
}
