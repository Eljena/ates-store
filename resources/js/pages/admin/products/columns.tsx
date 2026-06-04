import type { ColumnDef } from '@tanstack/react-table';
import ProductActions from './product-actions';

export type Product = {
    id: number;
    name: string;
    brand: string;
    price: number;
    stock: number;
    created_at: string;
    category: {
        id: number;
        name: string;
    };
};

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'category.name',
        header: 'Kategorie',
    },
    {
        accessorKey: 'brand',
        header: 'Marke',
    },
    {
        accessorKey: 'price',
        header: 'Preis',
        cell: ({ row }) => {
            const price = parseFloat(row.getValue<string>('price'));

            return `${price.toFixed(2)} €`;
        },
    },
    {
        accessorKey: 'stock',
        header: 'Lagerbestand',
        cell: ({ row }) => {
            const stock = row.getValue<number>('stock');

            return (
                <div className="flex justify-center">
                    <span
                        className={
                            stock === 0 ? 'font-medium text-red-500' : ''
                        }
                    >
                        {stock}
                    </span>
                </div>
            );
        },
    },
    {
        accessorKey: 'created_at',
        header: 'Erstellt am',
        cell: ({ row }) =>
            new Date(row.getValue<string>('created_at')).toLocaleDateString(
                'de-DE',
            ),
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <ProductActions id={row.original.id} />
                </div>
            );
        },
    },
];
