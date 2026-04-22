import { Head } from '@inertiajs/react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import CategoryFiltersSidebar from '@/components/category-filters-sidebar';
import ProductGrid from '@/components/product-grid';
import { SortSelect } from '@/components/sort-select';
import { useCategoryFilters } from '@/hooks/useCategoryFilters';
import Layout from '@/layouts/shop/layout';
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

    const {
        sort,
        available,
        selectedBrands,
        hasActiveFilters,
        handleSortChange,
        toggleAvailableFilter,
        toggleBrandFilter,
        resetFilters,
    } = useCategoryFilters(category.slug, filters);

    return (
        <>
            <Head title={categoryName} />
            <Layout>
                <div className="pb-5">
                    <Breadcrumbs
                        breadcrumbs={[
                            { title: 'Startseite', href: '/' },
                            { title: categoryName, href: '/' },
                        ]}
                    />
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
                    <CategoryFiltersSidebar
                        categories={categories}
                        currentCategorySlug={category.slug}
                        available={available}
                        brands={brands}
                        selectedBrands={selectedBrands}
                        hasActiveFilters={hasActiveFilters}
                        onToggleAvailable={toggleAvailableFilter}
                        onToggleBrand={toggleBrandFilter}
                        onResetFilters={resetFilters}
                    />

                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold">{categoryName}</h1>
                        <div className="flex justify-between">
                            <p className="flex-1 text-sm text-gray-500">
                                {products.length} Artikel
                            </p>
                            <SortSelect
                                value={sort}
                                onValueChange={handleSortChange}
                            />
                        </div>
                        <ProductGrid products={products} />
                    </div>
                </div>
            </Layout>
        </>
    );
}
