import { useProductFilters } from '@/hooks/useProductFilters';
import Layout from '@/layouts/shop/layout';
import type { ProductsViewProps } from '@/types/shop';
import { Breadcrumbs } from './breadcrumbs';
import CategoryFiltersSidebar from './category-filters-sidebar';
import ProductGrid from './product-grid';
import { SortSelect } from './sort-select';

export default function ProductsView({
    title,
    currentCategorySlug,
    filterUrl,
    categories,
    products,
    brands,
    filters,
}: ProductsViewProps) {
    const {
        sort,
        available,
        selectedBrands,
        hasActiveFilters,
        handleSortChange,
        toggleAvailableFilter,
        toggleBrandFilter,
        resetFilters,
    } = useProductFilters(filterUrl, filters);

    return (
        <Layout>
            <div className="pb-5">
                <Breadcrumbs
                    breadcrumbs={[
                        { title: 'Startseite', href: '/' },
                        { title: title, href: '/' },
                    ]}
                />
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
                <CategoryFiltersSidebar
                    categories={categories}
                    currentCategorySlug={currentCategorySlug}
                    available={available}
                    brands={brands}
                    selectedBrands={selectedBrands}
                    hasActiveFilters={hasActiveFilters}
                    onToggleAvailable={toggleAvailableFilter}
                    onToggleBrand={toggleBrandFilter}
                    onResetFilters={resetFilters}
                />

                <div className="space-y-6">
                    <h1 className="text-3xl font-bold">{title}</h1>
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
    );
}
