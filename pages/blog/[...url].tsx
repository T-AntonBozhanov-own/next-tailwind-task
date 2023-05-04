import {Table} from "@/components";
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Blog({ data }: {data: IData}) {
    return (
        <Table data={[data]} title='Post Detail' isDetails />
    )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<{data: IData | null}> = async ({ params }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: IData[] = await response.json();
    const blogItem = data?.find(item => item?.id === Number(params?.url?.[0])) ?? null

    return {
        props: {
            data: blogItem ?? null,
        }}
}
