'use client'

import {Modal} from "@/Components/Modal";
import Link from "next/link";
import {useRouter} from "next/router";

export default function AboutModal() {
    const router = useRouter();
    return (
        <Modal onClose={() => router.back}>
            <h1>О нас</h1>
            <p>Мы - прекрасная компания</p>
            <Link href={'/public'} scroll={false}>
                На главную
            </Link>
        </Modal>
    )
}