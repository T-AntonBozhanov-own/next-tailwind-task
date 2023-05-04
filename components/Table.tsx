import {TableRow} from "@/components/TableRow";
import {TableHeaderItem} from "@/components/TableHeaderItem";
import {Divider} from "@/components/Divider";
import {Title} from "@/components/Title";
import {usePagination} from "@/components/usePagination";
import {Pagination} from "@/components/Pagination";

interface ITable {
    data: IData[]
    title: string
    isDetails?: boolean
}
export const Table = ({data, title, isDetails}: ITable) => {
    const {
        dataToShow,
        activePage,
        total,
        setActivePage,
    } = usePagination(data)
    return (
        <div className='bg-amber-400'>
            <Title title={title} />
            <Divider />
            <table className='w-full'>
                <thead>
                    <tr>
                        <TableHeaderItem />
                        <TableHeaderItem title='Title'/>
                        <TableHeaderItem title='body'/>
                    </tr>
                </thead>
                <tbody>
                    {dataToShow.map((item) => (
                        <TableRow
                            key={item.id}
                            id={item.id}
                            body={item.body}
                            title={item.title}
                            isDetails={isDetails}/>
                    ))}
                </tbody>
            </table>
            <Pagination activePage={activePage} total={total} setActivePage={setActivePage}/>
        </div>
    )
}