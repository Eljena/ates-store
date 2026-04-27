import { Head } from '@inertiajs/react';
import { route } from 'ziggy-js';
import ProductsView from '@/components/products-view';
import type { IndexProps } from '@/types/shop';

export default function Index({
    categories,
    products,
    brands,
    filters,
}: IndexProps) {
    return (
        <>
            <Head title="Alle Produkte" />
            <ProductsView
                title="Alle Produkte"
                categories={categories}
                filterUrl={route('products.index')}
                products={products}
                brands={brands}
                filters={filters}
            />
        </>
    );
}
