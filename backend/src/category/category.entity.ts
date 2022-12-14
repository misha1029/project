import * as mongoose from 'mongoose'
import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface CategoryEntity extends Base {}

export class CategoryEntity extends TimeStamps {
	@prop()
	text: string

	@prop()
	projectId: mongoose.Types.ObjectId
}
