import { prop, Ref } from '@typegoose/typegoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'
import { ProjectModel } from 'src/project/project.model'
import * as mongoose from 'mongoose'

export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
	@prop({ unique: true })
	email: string

	@prop()
	password: string

	@prop({ ref: () => ProjectModel })
	project: Ref<ProjectModel>[]
}
