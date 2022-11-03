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
import { CategoryService } from './category.servise'
import { CreateCategoryDto } from './dto/create-category.dto'

@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Get()
	@Auth()
	async getAll() {
		return this.categoryService.getAll()
	}

	@Post()
	@Auth()
	@HttpCode(200)
	async create(@Body() dto: CreateCategoryDto) {
		const newCategory = await this.categoryService.create(dto)
		if (!newCategory) throw new NotFoundException('Error')
		return newCategory
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@Auth()
	@HttpCode(200)
	async update(
		@Param('id', IdValidationPipe) id: string,
		@Body() dto: CreateCategoryDto
	) {
		const updateProject = await this.categoryService.update(id, dto)
		if (!updateProject) throw new NotFoundException('Project not found')
		return updateProject
	}

	@Auth()
	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: string) {
		const deletedDoc = await this.categoryService.delete(id)
		if (!deletedDoc) throw new NotFoundException('Project not found')
	}
}
