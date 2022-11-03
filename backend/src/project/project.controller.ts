import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/Auth.decorator'
import { IdValidationPipe } from 'src/pipes/id.validation.pipe'
import { ProjectService } from './project.service'
import { CreateProjectDto } from './dto/create-project.dto'
import { User } from 'src/user/decorators/user.decorator'
import { UpdateProjectDto } from './dto/update-project.dto'
import { CategoryService } from 'src/category/category.servise'

@Controller('projects')
export class ProjectController {
	constructor(
		private readonly projectService: ProjectService,
		private readonly categoryService: CategoryService
	) {}

	@Get()
	@Auth()
	async getAll(@User('_id') _id: string) {
		return this.projectService.getAll(_id)
	}

	@UsePipes(new ValidationPipe())
	@Post()
	@Auth()
	@HttpCode(200)
	async create(@User('_id') _id: string, @Body() dto: CreateProjectDto) {
		return this.projectService.create({
			...dto,
			userId: _id,
		})
	}

	@Get(':id')
	@Auth()
	async get(@Param('id', IdValidationPipe) id: string) {
		const categories = await this.categoryService.findCategories(id)
		const project = await this.projectService.byId(id)

		return { ...project.toObject(), categories }
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@Auth()
	@HttpCode(200)
	async update(
		@Param('id', IdValidationPipe) id: string,
		@User('_id') _id: string,
		@Body() dto: UpdateProjectDto
	) {
		const updatedProject = await this.projectService.update(id, {
			...dto,
			userId: _id,
		})
		if (!updatedProject) throw new NotFoundException('Error')
		return updatedProject
	}

	@Delete(':id')
	@Auth()
	async delete(@Param('id', IdValidationPipe) id: string) {
		const deletedDoc = await this.projectService.delete(id)
		if (!deletedDoc) throw new NotFoundException('Project not found')
	}
}
