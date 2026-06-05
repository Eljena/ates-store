import { Head, Link } from '@inertiajs/react';
import { PlusCircle } from 'lucide-react';
import { route } from 'ziggy-js';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import type { Product } from './columns';
import { columns } from './columns';

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
            <div className="space-y-6 p-6">
                <h1 className="text-2xl font-semibold">Produkte</h1>
                <div>
                    <Link href={route('admin.products.create')}>
                        <Button>
                            <PlusCircle />
                            Neues Produkt anlegen
                        </Button>
                    </Link>
                </div>
                <DataTable columns={columns} data={products.data} />
            </div>
        </>
    );
}

AdminProductsIndex.layout = {
    breadcrumbs: [
        {
            title: 'Produkte',
            href: '/admin/products',
        },
    ],
};
