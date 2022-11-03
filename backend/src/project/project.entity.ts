import * as mongoose from 'mongoose'
import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface ProjectEntity extends Base {}

export class ProjectEntity extends TimeStamps {
	@prop()
	name: string

	@prop()
	description: string

	@prop()
	userId: mongoose.Types.ObjectId
}
