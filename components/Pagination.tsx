interface IPagination {
    activePage: number
    setActivePage: (pageNumber: number) => void
    total: number
}
export const Pagination = ({activePage, setActivePage, total}: IPagination) => {
    return (
        <div className='flex justify-center items-center w-full mt9'>
            {Array.from(Array(total)).map((_, index) =>
                <button
                    key={index}
                    className={`mx-1 ${index + 1 === activePage ? 'text-red-500' : 'text-black'}`}
                    onClick={() => setActivePage(index + 1)}>{index + 1}
                </button>)}
        </div>
    )
}