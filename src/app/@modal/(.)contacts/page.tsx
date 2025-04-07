'use client'
import { useRouter } from 'next/navigation'

export default function ContactsModal() {
    const router = useRouter()

    return (
        <div className="fixed inset-0 bg-black/50 z-50">
            <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg">
                <h2 className='text-2xl font-bold'>Контакты</h2>
                <p>*Тут скоро будут контакты*</p>
                <button onClick={() => router.back()} className='bg-blue-200 p-3 mt-3 text-white rounded-2xl cursor-pointer hover:text-black duration-500'>Закрыть</button>
            </div>
        </div>
    )
}