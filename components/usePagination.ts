import {useMemo, useState} from "react";

const ITEMS_PER_PAGE = 5
export const usePagination = (data: IData[]) => {
    const [activePage, setActivePage] = useState<number>(1)

    const paginatedData = useMemo<IData[][]>(() => {
        return data.reduce<IData[][]>((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / ITEMS_PER_PAGE)

            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
            }

            resultArray[chunkIndex].push(item)

            return resultArray
        }, [])
    }, [data])

    return {
         dataToShow: paginatedData[activePage - 1],
         activePage,
         total: paginatedData.length,
         setActivePage,
    }
}