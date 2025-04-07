import Link from "next/link";

export default function Contacts() {
    return (
        <div className='flex flex-col items-center justify-center my-15'>
            <h1 className='text-5xl font-bold mb-3'>Контакты</h1>
            <p>*Тут скоро будут контакты*</p>
            <Link href={'/'} className='bg-blue-200 p-3 mt-3 text-white rounded-2xl cursor-pointer hover:text-black duration-500'>
                на главную
            </Link>
        </div>
    );
}