import { Head } from '@inertiajs/react';
import type { Product } from './columns';
import { columns } from './columns';
import { DataTable } from '@/components/ui/data-table';

interface AdminProductsIndexProps {
    products: {
        data: Product[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

export default function AdminProductsIndex({
    products,
}: AdminProductsIndexProps) {
    return (
        <>
            <Head title="Produkte verwalten" />
            <div className="mx-auto p-6">
                <h1 className="mb-6 text-2xl font-semibold">Produkte</h1>
                <DataTable columns={columns} data={products.data} />
            </div>
        </>
    );
}

AdminProductsIndex.layout = {
    breadcrumbs: [
        {
            title: 'Admin',
            href: '/admin',
        },
    ],
};
