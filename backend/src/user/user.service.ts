import { Injectable, NotFoundException } from '@nestjs/common'
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types'
import { genSalt, hash } from 'bcryptjs'
import { Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
import { UpdateDto } from './dto/update.dto'
import { UserModel } from './user.model'

@Injectable()
export class UserService {
	constructor(
		@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>
	) {}

	async byId(id: string): Promise<DocumentType<UserModel>> {
		const user = await this.userModel.findById(id).exec()

		if (user) return user
		throw new NotFoundException('User not found')
	}

	async updateProfile(_id: string, data: UpdateDto) {
		const user = await this.userModel.findById(_id)
		const isSameUser = await this.userModel.findOne({ email: data.email })

		if (isSameUser && String(_id) !== String(isSameUser._id)) {
			throw new NotFoundException('Email busy')
		}

		if (user) {
			if (data.password) {
				const salt = await genSalt(10)
				user.password = await hash(data.password, salt)
			}
			user.email = data.email
			
			await user.save()
			return
		}

		throw new NotFoundException('User not found')
	}

	async getCount() {
		return this.userModel.find().count().exec()
	}

	async delete(id: string): Promise<DocumentType<UserModel> | null> {
		return this.userModel.findByIdAndDelete(id).exec()
	}
}
