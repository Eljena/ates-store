import { Link } from '@inertiajs/react';
import logo from '@/assets/images/ates-store-logo.png';
import LinkAnimated from '../ui/link-animated';

export default function Header() {
    return (
        <header>
            <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
                <Link href="/" className="w-25">
                    <img src={logo} />
                </Link>

                <nav className="flex gap-5 text-lg">
                    <LinkAnimated href="/">Startseite</LinkAnimated>
                    <LinkAnimated href="/products">Produkte</LinkAnimated>
                    <LinkAnimated href="/cart">Warenkorb</LinkAnimated>
                </nav>
            </div>
        </header>
    );
}
