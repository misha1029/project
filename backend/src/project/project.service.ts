import { Injectable } from '@nestjs/common'
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types'
import { Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
import { ProjectEntity } from './project.entity'
import { CreateProjectDto } from './dto/create-project.dto'
import { UpdateProjectDto } from './dto/update-project.dto'

@Injectable()
export class ProjectService {
	constructor(
		@InjectModel(ProjectEntity)
		private readonly projectModel: ModelType<ProjectEntity>
	) {}

	async getAll(userId: string): Promise<DocumentType<ProjectEntity>[]> {
		return this.projectModel.find({ userId })
	}

	async byId(id: string): Promise<DocumentType<ProjectEntity>> {
		return this.projectModel.findById(id).exec()
	}

	async create(dto: CreateProjectDto): Promise<DocumentType<ProjectEntity>> {
		return this.projectModel.create(dto)
	}

	async update(
		id: string,
		dto: UpdateProjectDto
	): Promise<DocumentType<ProjectEntity> | null> {
		return this.projectModel.findByIdAndUpdate(id, dto, { new: true }).exec()
	}

	async delete(id: string): Promise<DocumentType<ProjectEntity> | null> {
		return this.projectModel.findByIdAndDelete(id).exec()
	}
}
