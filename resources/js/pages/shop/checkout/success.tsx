import { Head } from '@inertiajs/react';
import { ArrowBigRight } from 'lucide-react';
import { route } from 'ziggy-js';
import LinkAnimated from '@/components/ui/link-animated';
import Layout from '@/layouts/shop/layout';

export default function Success() {
    return (
        <>
            <Head title="Bestellung erfolgreich" />
            <Layout>
                <div className="mb-10">
                    <p className="text-2xl font-bold">
                        Ihre Bestellung wurde erfolgreich vermittelt.
                    </p>
                </div>
                <div className="flex">
                    <LinkAnimated href={route('home')}>
                        Weiter einkaufen
                    </LinkAnimated>
                    <ArrowBigRight />
                </div>
            </Layout>
        </>
    );
}
