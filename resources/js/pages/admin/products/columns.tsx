import type { ColumnDef } from '@tanstack/react-table';

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
                <span className={stock === 0 ? 'font-medium text-red-500' : ''}>
                    {stock}
                </span>
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
];
