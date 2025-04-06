import Link from "next/link";

export default function Contacts() {
    return (
        <div>
            <h1>Контакты</h1>
            <p>Это страница с контактами.</p>
            <Link href={'/public'}>
                На главную
            </Link>
        </div>
    );
}