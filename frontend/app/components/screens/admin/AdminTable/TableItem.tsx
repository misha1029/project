import React, { FC } from 'react'
import { Actions } from './Actions/Actions'
import { ITable } from './table.interface'
import styles from './Table.module.scss'

export const TableItem: FC<ITable>= ({removeHandler, tableItem}) => {
  return (
    <div className = {styles.item}>
        {tableItem.items.map((value)=> (
            <div key = {value}>{value}</div>
        ))}
        <Actions editUrl = {tableItem.editUrl} removeHandler = {removeHandler}/>
    </div>
  )
}
