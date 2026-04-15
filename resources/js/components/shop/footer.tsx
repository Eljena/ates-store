import LinkAnimated from '../ui/link-animated';
import { Separator } from '../ui/separator';

export default function Footer() {
    return (
        <footer>
            <div className="flex flex-col items-center gap-5 bg-accent py-10">
                <div className="flex h-4 items-center gap-5">
                    <LinkAnimated href="#">Impressum</LinkAnimated>
                    <Separator orientation="vertical" className="bg-black" />
                    <LinkAnimated href="#">Datenschutz</LinkAnimated>
                    <Separator orientation="vertical" className="bg-black" />

                    <LinkAnimated href="#">AGB</LinkAnimated>
                </div>
                <p className="text-base font-bold">&copy; 2026 Ate's store</p>
            </div>
        </footer>
    );
}
