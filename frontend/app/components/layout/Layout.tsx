import { Heading } from 'components/ui/heading/Heading'
import { FC, ReactNode } from 'react'

import styles from './Layout.module.scss'
import { Navigation } from './Navigation/Navigation'

interface LayoutProps {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<div>
				<div className="px-layout mt-10 block">
					<Heading title="RightMenu" className="mb-8 text-xl" />
				</div>
			</div>
		</div>
	)
}

export default Layout
