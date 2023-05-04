interface ITitle {
    title: string;
}
export const Title = ({title}: ITitle) => (
    <span className='flex justify-center items-center h-12 mb-3 text-4xl text-white'>{title}</span>
)