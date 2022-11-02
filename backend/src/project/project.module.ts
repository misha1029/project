import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { ProjectController } from './project.controller'
import { ProjectModel } from './project.model'
import { ProjectService } from './project.service'
import { UserModule } from 'src/user/user.module'
import { CategoryEntity } from 'src/category/category.entity'

@Module({
	controllers: [ProjectController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: ProjectModel,
				schemaOptions: {
					collection: 'Project',
				},
			},
		]),
		CategoryEntity,
	],
	providers: [ProjectService],
	exports: [ProjectService],
})
export class ProjectModule {}
