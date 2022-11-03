/* import { IsString } from 'class-validator'

export class CreateCategoryDto {
	@IsString()
	text: string

	@IsString()
	projects?: string[]
} */
import { IsString } from 'class-validator'

export class CreateCategoryDto {
  @IsString()
  text: string

  @IsString()
  projectId: string
}
