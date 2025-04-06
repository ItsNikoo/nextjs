"use server"

import data from '../../../data.json'
import TimeConverter from "@/functions/TimeConverter";
import Image from "next/image";

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

export default async function Page({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    const newsId = Number(slug)

    const newsItem = data.find((item: Post) => item.id === newsId);

    if (!newsItem) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl text-red-600">Новость с ID {slug} не найдена</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-row mx-10">
            <div className='flex flex-col w-1/2 m-10 p-2'>
                <h1 className="font-bold text-xl">{newsItem.text}</h1>
                <p className="text-lg text-gray-600">{TimeConverter(newsItem.date)}</p>
                <p className="mt-4">ID поста: {newsItem.id}</p>
            </div>
            <div className="flex flex-col w-1/2 mt-15">
                {newsItem.attachments.map((item: Attachment, index: number) => (
                    item.image &&
                    <div key={index}>
                        <Image src={item.image?.src} width={item.image?.width} height={item.image?.height} alt={''}/>
                    </div>
                ))}
            </div>
        </div>
    );
}