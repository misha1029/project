import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { CategoryEntity } from '../category.entity'

type TypeData = keyof CategoryEntity

export const GetGategory = createParamDecorator(
	(data: TypeData, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest()
		const category = request.category

		return data ? category?.[data] : category
	}
)
