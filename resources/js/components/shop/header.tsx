import { Link, usePage } from '@inertiajs/react';
import {
    ArrowRightCircle,
    Menu,
    Search,
    ShoppingCart,
    User,
} from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/images/ates-store-logo.png';
import { dashboard, login } from '@/routes';
import { Button } from '../ui/button';
import { Field } from '../ui/field';
import { Input } from '../ui/input';
import LinkAnimated from '../ui/link-animated';
import { Separator } from '../ui/separator';
import { SearchField } from '../search-field';

export default function Header() {
    const { auth } = usePage().props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div className="bg-accent">
                <div className="mx-auto flex max-w-7xl justify-end py-2">
                    {auth.user ? (
                        <Button variant="link" asChild>
                            <Link
                                href={dashboard()}
                                className="flex items-center gap-2"
                            >
                                <ArrowRightCircle className="size-4" />
                                Zum Admin-Bereich
                            </Link>
                        </Button>
                    ) : (
                        <div className="flex h-5 items-center gap-2">
                            <Button variant="link" asChild>
                                <Link href="#">
                                    <ShoppingCart />
                                    Warenkorb
                                </Link>
                            </Button>

                            <Separator
                                orientation="vertical"
                                className="size-0 bg-gray-500"
                            />

                            <Button asChild variant="link">
                                <Link href={login()}>
                                    <User className="size-4" />
                                    Anmelden
                                </Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            <div className="mx-auto max-w-7xl border-b px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="w-24 shrink-0">
                        <img src={logo} />
                    </Link>

                    <nav className="hidden items-center gap-5 md:flex">
                        <LinkAnimated href="/">Startseite</LinkAnimated>
                        <LinkAnimated href="/products">Produkte</LinkAnimated>
                        <LinkAnimated href="/cart">Warenkorb</LinkAnimated>
                        <SearchField />
                    </nav>

                    <div className="md:hidden">
                        <Button
                            onClick={() => setIsOpen(!isOpen)}
                            variant="ghost"
                            className="p-4"
                        >
                            <Menu className="size-6" />
                        </Button>
                    </div>
                </div>

                {isOpen && (
                    <nav className="mt-4 flex flex-col items-center gap-4 bg-accent p-4">
                        <SearchField />
                        <LinkAnimated href="/">Startseite</LinkAnimated>
                        <LinkAnimated href="/products">Produkte</LinkAnimated>
                        <LinkAnimated href="/cart">Warenkorb</LinkAnimated>
                    </nav>
                )}
            </div>
        </header>
    );
}
