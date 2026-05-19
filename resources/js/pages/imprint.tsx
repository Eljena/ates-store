import { Head } from '@inertiajs/react';
import PageHeading from '@/components/page-heading';
import Layout from '@/layouts/shop/layout';

export default function Imprint() {
    return (
        <>
            <Head title="Impressum" />
            <Layout>
                <PageHeading text="Impressum" />
                <div className="mt-10 flex flex-col gap-5">
                    <div className="">
                        <p>Eljena Trüschel</p>
                        <p>Westring 306</p>
                        <p>24116 Kiel</p>
                    </div>
                    <div className="flex gap-2">
                        <p>E-Mail:</p>
                        <a
                            className="text-blue-600 underline"
                            href="mailto:eljenatruschel@yahoo.de"
                        >
                            eljenatruschel@yahoo.de
                        </a>
                    </div>
                </div>
            </Layout>
        </>
    );
}
