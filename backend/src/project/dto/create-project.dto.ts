/* import { IsString, IsArray } from 'class-validator'

export class CreateProjectDto {
	@IsString()
	name: string

	@IsString()
	description: string
	
	@IsArray()
	@IsString({ each: true })
	user: string[]
}
 */
import { IsString, IsOptional } from 'class-validator'

export class CreateProjectDto {
	@IsString()
	name: string

	@IsString()
	description: string

	@IsOptional()
	@IsString()
	userId?: string
}
