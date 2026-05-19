import { route } from 'ziggy-js';
import LinkAnimated from '../ui/link-animated';
import { Separator } from '../ui/separator';

export default function Footer() {
    return (
        <footer className="pb-9">
            <div className="flex flex-col items-center gap-5 bg-accent py-15">
                <div className="flex h-4 items-center gap-5">
                    <LinkAnimated href={route('imprint')}>
                        Impressum
                    </LinkAnimated>
                    <Separator orientation="vertical" className="bg-primary" />
                    <LinkAnimated href="#">Datenschutz</LinkAnimated>
                    <Separator orientation="vertical" className="bg-primary" />
                    <LinkAnimated href="#">AGB</LinkAnimated>
                </div>
                <p className="text-base font-bold">&copy; 2026 Ate's store</p>
            </div>
        </footer>
    );
}
