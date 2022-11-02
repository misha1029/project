import { IsEmail, IsString, IsArray } from 'class-validator'

export class UpdateDto {
	@IsEmail()
	email: string

	@IsString()
	password?: string

	@IsArray()
	@IsString({ each: true })
	project: string[]
}
