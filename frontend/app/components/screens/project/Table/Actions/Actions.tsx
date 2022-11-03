import { MaterialIcon } from 'components/ui/MaterialIcon'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import styles from './Actions.module.scss'

interface IActions {
	editUrl: string
	removeHandler: () => void
}

export const Actions: FC<IActions> = ({ editUrl, removeHandler }) => {

    const {push} = useRouter()

	return <div className = {styles.actions} >
        <button onClick = {() => push(editUrl)}>
            <MaterialIcon name = 'MdEdit'/>
        </button>
        <button onClick = {removeHandler}>
            <MaterialIcon name = 'MdClose'/>
        </button>
    </div>
}
