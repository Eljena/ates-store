import { Link, usePage } from '@inertiajs/react';
import { ArrowRightCircle, Menu, ShoppingCart, User, X } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/images/ates-store-logo.png';
import { dashboard, login } from '@/routes';
import { SearchField } from '../search-field';
import { Button } from '../ui/button';
import LinkAnimated from '../ui/link-animated';
import { Separator } from '../ui/separator';

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
                    <>
                        <div
                            className="fixed inset-0 z-40 bg-black/50"
                            onClick={() => setIsOpen(false)}
                        />
                        <nav className="fixed top-1/2 left-1/2 z-50 flex w-full -translate-x-1/2 -translate-y-1/2 bg-accent">
                            <div className="flex w-full flex-col gap-4 px-2 py-4">
                                <div className="flex justify-between">
                                    <img src={logo} className="w-12" />
                                    <Button onClick={() => setIsOpen(false)}>
                                        <X />
                                    </Button>
                                </div>
                                <div className="mb-5 flex flex-col items-center gap-6 text-lg">
                                    <SearchField />
                                    <LinkAnimated href="/">
                                        Startseite
                                    </LinkAnimated>
                                    <LinkAnimated href="/products">
                                        Produkte
                                    </LinkAnimated>
                                    <LinkAnimated href="/cart">
                                        Warenkorb
                                    </LinkAnimated>
                                </div>
                            </div>
                        </nav>
                    </>
                )}
            </div>
        </header>
    );
}
