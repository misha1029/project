import { FC } from 'react'

import AuthItems from '../Auth/AuthItems'

import styles from './Menu.module.scss'

export const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>Option</div>
			<ul className={styles.ul}>
				<AuthItems />
			</ul>
		</div>
	)
}
