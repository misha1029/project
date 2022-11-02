import { Injectable } from '@nestjs/common'
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types'
import { Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
import { ProjectModel } from './project.model'
import { CreateProjectDto } from './dto/create-project.dto'
import { UserModel } from 'src/user/user.model'

@Injectable()
export class ProjectService {
	constructor(
		@InjectModel(ProjectModel)
		private readonly projectModel: ModelType<ProjectModel>,
	) {}

	async getAll(): Promise<DocumentType<ProjectModel>[]> {
		let options = {}

		return (
			this.projectModel
				.aggregate()
				.match(options)
				.project({ __v: 0, updatedAt: 0, movies: 0 })
				.sort({ createdAt: -1 })
				.exec()
		)
	}

	async byName(name: string): Promise<DocumentType<ProjectModel>> {
		return this.projectModel.findOne({ name }).exec()
	}

	

	async byId(id: string): Promise<DocumentType<ProjectModel>> {
		return this.projectModel.findById(id).exec()
	}

	async create(): Promise<Types.ObjectId> {
		const defaultValue: CreateProjectDto = {
			name: '',
			description: '',
			user: [],
			
		}
		const project = await this.projectModel.create(defaultValue)
		return project._id
	}

	async update(
		id: string,
		dto: CreateProjectDto
	): Promise<DocumentType<ProjectModel> | null> {
		return this.projectModel.findByIdAndUpdate(id, dto, { new: true }).exec()
	}

	async delete(id: string): Promise<DocumentType<ProjectModel> | null> {
		return this.projectModel.findByIdAndDelete(id).exec()
	}
}
