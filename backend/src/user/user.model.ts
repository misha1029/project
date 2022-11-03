import { prop, Ref } from '@typegoose/typegoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'
import { ProjectEntity } from 'src/project/project.entity'
import * as mongoose from 'mongoose'

export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
	@prop({ unique: true })
	email: string

	@prop()
	password: string

	@prop({ ref: () => ProjectEntity })
	project: Ref<ProjectEntity>[]
}
