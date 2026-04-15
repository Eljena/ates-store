import { Link, usePage } from '@inertiajs/react';
import { ArrowRightCircle, Search, ShoppingCart, User } from 'lucide-react';
import logo from '@/assets/images/ates-store-logo.png';
import { dashboard, login } from '@/routes';
import { Button } from '../ui/button';
import { Field } from '../ui/field';
import { Input } from '../ui/input';
import LinkAnimated from '../ui/link-animated';
import { Separator } from '../ui/separator';

export default function Header() {
    const { auth } = usePage().props;

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
                        <div className="flex h-7 items-center gap-2">
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
            <div className="mx-auto flex max-w-7xl items-center justify-between border-b py-4">
                <Link href="/" className="w-25">
                    <img src={logo} />
                </Link>

                <nav className="flex items-center gap-5">
                    <LinkAnimated href="/">Startseite</LinkAnimated>
                    <LinkAnimated href="/products">Produkte</LinkAnimated>
                    <LinkAnimated href="/cart">Warenkorb</LinkAnimated>
                    <Field orientation="horizontal" className="gap-0">
                        <Input
                            className="rounded-full rounded-r-none"
                            type="search"
                            placeholder="Search..."
                        />
                        <Button className="rounded-full rounded-l-none">
                            <Search />
                        </Button>
                    </Field>
                </nav>
            </div>
        </header>
    );
}
