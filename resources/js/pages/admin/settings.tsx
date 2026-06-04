import { Head } from '@inertiajs/react';

export default function index() {
    return (
        <>
            <Head title="Admin" />
            <div className="mx-auto">
                <p>Hallo aus dem Admin-Bereich</p>
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
