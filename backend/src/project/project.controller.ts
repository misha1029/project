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


@Controller('projects')
export class ProjectController {
	constructor(private readonly projectService: ProjectService) {}

	@Get()
	async getAll() {
		return this.projectService.getAll()
	}


	@Get('by-slug/:name')
	async bySlug(@Param('name') name: string) {
		return this.projectService.byName(name)
	}
	
	@UsePipes(new ValidationPipe())
	@Post()
	@HttpCode(200)
	async create() {
		return this.projectService.create()
	}

	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		return this.projectService.byId(id)
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	async update(
		@Param('id', IdValidationPipe) id: string,
		@Body() dto: CreateProjectDto
	) {
		const updateProject = await this.projectService.update(id, dto)
		if (!updateProject) throw new NotFoundException('Project not found')
		return updateProject
	}

	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: string) {
		const deletedDoc = await this.projectService.delete(id)
		if (!deletedDoc) throw new NotFoundException('Project not found')
	}
}
