import type {Metadata} from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children, modal}: { children: React.ReactNode, modal: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`min-h-screen flex flex-col`}>
        <header className="flex justify-around py-3">
            <Link href={'/'}>
                <h1 className="font-bold text-3xl">Новостной портал</h1>
            </Link>
            <div className="flex items-center">
                <Link className="mx-2" href="/about" scroll={false}>
                    О нас
                </Link>
                <Link className="mx-2" href="/contacts">
                    Контакты
                </Link>
            </div>
        </header>
        <main className='flex-grow'>
            {children}
            {modal}
        </main>
        <footer className='flex justify-around py-3 bg-blue-200 font-bold font-serif '>
            <h1>Новостной портал РТУ МИРЭА</h1>
        </footer>
        </body>
        </html>
    );
}