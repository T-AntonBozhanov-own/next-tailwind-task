interface ITableHeaderItem {
    title?: string
}
export const TableHeaderItem = ({title}: ITableHeaderItem) => (
    <th className='bg-lime-500 h-12 border-2 border-amber-400'>{title ?? ''}</th>
)