import { Head } from '@inertiajs/react';
import { route } from 'ziggy-js';
import ProductsView from '@/components/products-view';
import { replaceUmlauts } from '@/lib/text-normalizer';
import type { ShowProps } from '@/types/shop';

export default function Show({
    category,
    categories,
    products,
    brands,
    filters,
}: ShowProps) {
    const categoryName = replaceUmlauts(category.name);

    return (
        <>
            <Head title={categoryName} />
            <ProductsView
                title={categoryName}
                currentCategorySlug={category.slug}
                filterUrl={route('categories.show', { slug: category.slug })}
                categories={categories}
                products={products}
                brands={brands}
                filters={filters}
            />
        </>
    );
}
