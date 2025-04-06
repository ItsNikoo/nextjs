import Link from "next/link";

export default function About(){
    return (
        <div>
            <h1>О нас</h1>
            <Link href={'/'}>
                на главную
            </Link>
        </div>
    )
}