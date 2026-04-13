import { Link } from "@inertiajs/react";
import LinkAnimated from "../ui/link-animated";
import logo from '@/assets/images/ates-store-logo.png';

export default function Header() {
    return (
        <header>
            <div className="flex max-w-7xl justify-between items-center mx-auto py-4">
                <Link href="/" className="w-25">
                    <img src={logo}/>
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