import { applyDecorators, UseGuards } from '@nestjs/common'
import { TypeRole } from '../auth.interface'
import { JwtAuthGuard } from '../guards/jwt.guard'

export function Auth(role: TypeRole = 'user') {
	return applyDecorators(
		role === 'user'
			? UseGuards(JwtAuthGuard)
			: UseGuards(JwtAuthGuard)
	)
}
