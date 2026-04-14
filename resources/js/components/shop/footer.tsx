import LinkAnimated from '../ui/link-animated';

export default function Footer() {
    return (
        <footer>
            <div className="mt-10 flex flex-col items-center gap-5 bg-accent py-10">
                <div className="flex gap-5">
                    <LinkAnimated href="/">Startseite</LinkAnimated>
                    <LinkAnimated href="/products">Produkte</LinkAnimated>
                    <LinkAnimated href="/cart">Warenkorb</LinkAnimated>
                </div>
                <p className="text-base font-bold">&copy; 2026 Ate's store</p>
            </div>
        </footer>
    );
}
