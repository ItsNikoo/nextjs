import Link from "next/link";

export default function About() {
    return (
        <div>
            <h1>О нас</h1>
            <p>Мы - прекрасная компания</p>
            <Link href={'/'}>
                На главную
            </Link>
        </div>
    );
}