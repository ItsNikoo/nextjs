import Link from "next/link";

export default function About(){
    return (
        <div className='flex flex-col items-center justify-center my-15'>
            <h1 className='text-5xl font-bold mb-3'>О нас</h1>
            <p className='text-lg'>Это прекрасный портал с новостями РТУ МИРЭА</p>
            <Link href={'/'} className='bg-blue-200 p-3 mt-3 text-white rounded-2xl cursor-pointer hover:text-black duration-500'>
                на главную
            </Link>
        </div>
    )
}