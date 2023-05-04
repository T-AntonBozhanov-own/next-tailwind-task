import Link from "next/link";
import {TableRow} from "@/components/TableRow";

interface ITable {
    data: IData[]
    title: string
    isDetails?: boolean
}
export const Table = ({data, title, isDetails}: ITable) => {
    return (
        <div className='bg-amber-400'>
            <span className='flex justify-center items-center h-12 mb-3 text-4xl text-white'>{title}</span>
            <span className='flex bg-white h-0.5 mx-12 mb-9' />
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='bg-lime-500 h-12 border-2 border-amber-400'></th>
                        <th className='bg-lime-500 h-12 border-2 border-amber-400'>Title</th>
                        <th className='bg-lime-500 h-12 border-2 border-amber-400'>body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <TableRow
                            key={item.id}
                            id={item.id}
                            body={item.body}
                            title={item.title}
                            isDetails={isDetails}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}