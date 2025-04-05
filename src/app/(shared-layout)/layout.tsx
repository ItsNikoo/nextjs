export default function SharedLayout({ children } : { children: React.ReactNode }) {
    return (
        <div>
            <div>{children}</div>
            <footer>
                <p>Свяжитесь с нами или узнайте больше!</p>
            </footer>
        </div>
    );
}