export interface ITableItem {
    _id: string
    editUrl: string
    items: string[]
}

export interface ITable {
    tableItem: ITableItem
    removeHandler: () => void
}