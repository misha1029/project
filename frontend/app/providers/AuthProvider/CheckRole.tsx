import { useAuth } from 'hooks/useAuth'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { TypeComponentAuthFields } from 'shared/types/auth.types'

const CheckRole: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyUser },
}) => {
	const { user } = useAuth()

	const router = useRouter()

	const Children = () => {
		return <>{children}</>
	}

	const isUser = user

	if (isUser && isOnlyUser) return <Children />
	else {
		router.pathname !== './auth' && router.replace('./auth')
		return null
	}
}

export default CheckRole
