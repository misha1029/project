import React, { FC } from 'react'

import { Logo } from './Logo/Logo'
import { Menu } from './MenuContainer/Menu/Menu'
import styles from './Navigation.module.scss'

export const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<Menu />
		</div>
	)
}
