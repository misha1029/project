import { SleletonLoader } from 'components/ui/Skeleton/SleletonLoader'
import React, { FC } from 'react'

import styles from './Table.module.scss'
import { TableHeader } from './TableHeader'
import { TableItem } from './TableItem'
import { ITableItem } from './table.interface'

interface ITable {
	tableItem: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id: string) => void
}

export const Table: FC<ITable> = ({
	removeHandler,
	tableItem,
	isLoading,
	headerItems,
}) => {
	return (
		<div>
			<TableHeader headerItems={headerItems} />

			{isLoading ? (
				<SleletonLoader count={1} className="mt-4" />
			) : tableItem.length ? (
				tableItem.map((tableItem) => (
					<TableItem
						key={tableItem._id}
						removeHandler={() => removeHandler(tableItem._id)}
						tableItem={tableItem}
					/>
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
			)}
		</div>
	)
}
