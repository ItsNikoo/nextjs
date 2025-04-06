import data from '../data.json';
import Link from 'next/link';
import TimeConverter from "@/functions/TimeConverter";

interface Img {
    src: string;
    width: number;
    height: number;
}

interface Attachment {
    type?: string;
    image?: Img;
    link?: string;
    caption?: string;
    titleLink?: string;
    description?: string;
}

interface Post {
    id: number;
    text: string;
    date: number;
    type: string;
    attachments?: Attachment[];
}

export default function Home() {

    return (
        <div className={'flex flex-col mx-15'}>
            {data.map((item: Post) => (
                <div className={'my-2 bg-blue-100 rounded-2xl p-5'} key={item.id}>
                    <Link href={`/news/${item.id}`}>
                        <h3 className='font-bold'>{item.text}</h3>
                        <p className='text-gray-500'>{TimeConverter(item.date)}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
