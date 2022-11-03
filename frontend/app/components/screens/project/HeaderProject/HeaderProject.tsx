import React, { ChangeEvent, FC } from 'react'

import { CreateButton } from './ProjectCreateButton'

import styles from './HeaderProject.module.scss'

interface IHeaderProject {
	onClick?: () => void
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export const HeaderProject: FC<IHeaderProject> = ({
	onClick
}) => {
	return (
		<div className={styles.header}>
            {onClick && <CreateButton onClick = {onClick}/>}
		</div>
	)
}
