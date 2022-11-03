import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { CategoryModule } from 'src/category/category.module'
import { ProjectController } from './project.controller'
import { ProjectEntity } from './project.entity'
import { ProjectService } from './project.service'


@Module({
	controllers: [ProjectController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: ProjectEntity,
				schemaOptions: {
					collection: 'Project',
				},
			},
		]),
		CategoryModule,
	],
	providers: [ProjectService],
	exports: [ProjectService],
})
export class ProjectModule {}
