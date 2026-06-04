import { Head } from '@inertiajs/react';

export default function index() {
    return (
        <>
            <Head title="Admin" />
            <div className="mx-auto">
                <p>Hallo aus dem Produktbereich</p>
            </div>
        </>
    );
}

index.layout = {
    breadcrumbs: [
        {
            title: 'Admin',
            href: '/admin',
        },
    ],
};
