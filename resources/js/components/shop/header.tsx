import { Link } from '@inertiajs/react';
import logo from '@/assets/images/ates-store-logo.png';
import { Button } from '../ui/button';
import { Field } from '../ui/field';
import { Input } from '../ui/input';
import LinkAnimated from '../ui/link-animated';
import { Search } from 'lucide-react';

export default function Header() {
    return (
        <header>
            <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
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
