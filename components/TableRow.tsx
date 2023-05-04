import Link from "next/link";

interface ITableRow {
    id: number
    isDetails?: boolean
    title: string
    body:string
}
export const TableRow = ({id, isDetails, title, body}: ITableRow) => (
    <tr>
        <td className={`bg-white h-12 border-2 border-amber-400 w-16 text-center ${isDetails ? '' : 'hover:bg-green-500'}`}>
            <Link href={`blog/${id}`} className={isDetails ? 'pointer-events-none' : 'pointer-events-auto'}>
                {id}
            </Link></td>
        <td className='bg-white h-12 border-2 border-amber-400'>{title}</td>
        <td className='bg-white h-12 border-2 border-amber-400'>{body}</td>
    </tr>
)