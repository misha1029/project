import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { CategoryController } from './category.controller'

import { CategoryService } from './category.servise'
import { CategoryEntity } from './category.entity'
import { ProjectModel } from 'src/project/project.model'

@Module({
	controllers: [CategoryController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: CategoryEntity,
				schemaOptions: {
					collection: 'Category',
				},
			},
		]),
		ProjectModel,
	],
	providers: [CategoryService],
	exports: [CategoryService],
})
export class CategoryModule {}
