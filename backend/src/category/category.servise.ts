import {
	ConflictException,
	Injectable,
	InternalServerErrorException,
} from '@nestjs/common'
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { ProjectModel } from 'src/project/project.model'
import { CategoryEntity } from './category.entity'
import { CreateCategoryDto } from './dto/create-category.dto'

@Injectable()
export class CategoryService {
	constructor(
		@InjectModel(CategoryEntity)
		private readonly categoryEntity: ModelType<CategoryEntity>
	) {}

	async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
		const text = createCategoryDto
		try {
			const category = await this.categoryEntity.create(text)
			return category
		} catch (error) {
			if (error === '23505') {
				throw new ConflictException('Error Category')
			} else {
				throw new InternalServerErrorException()
			}
		}
	}

	async getAll(): Promise<DocumentType<CategoryEntity>[]> {
		let options = {}

		return this.categoryEntity.aggregate().sort({ createdAt: -1 }).exec()
	}

	async update(
		id: string,
		dto: CreateCategoryDto
	): Promise<DocumentType<CategoryEntity> | null> {
		return this.categoryEntity.findByIdAndUpdate(id, dto, { new: true }).exec()
	}

	async delete(id: string): Promise<DocumentType<CategoryEntity> | null> {
		return this.categoryEntity.findByIdAndDelete(id).exec()
	}
}
