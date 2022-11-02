import { useActions } from 'hooks/useActions'
import { useAuth } from 'hooks/useAuth'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import { TypeComponentAuthFields } from 'shared/types/auth.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
	ssr: false,
})

const AuthProvider: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyUser },
}) => {

	return (!isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser }}>
			{children}
		</DynamicCheckRole>
	))
}

export default AuthProvider
