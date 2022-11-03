import { IsString, IsArray, IsOptional } from 'class-validator'

export class UpdateProjectDto {
	@IsOptional()
	@IsString()
	name?: string

	@IsOptional()
	@IsString()
	description?: string

	@IsOptional()
	@IsString()
	userId?: string
}
