import {Table} from "@/components";
import { GetStaticProps } from 'next'

export default function Blog({ data }: {data: IData[]}) {
  return (
      <Table data={data} title='Plog Posts' />
  )
}

export const getStaticProps: GetStaticProps<{data?: IData[]}> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: IData[] = await response.json();

  return {
    props: {
      data
    }}
}
