import { IsString, IsArray } from 'class-validator'

export class CreateCategoryDto {
	@IsString()
	text: string

	@IsArray()
	@IsString({ each: true })
	projects?: string[]
}
