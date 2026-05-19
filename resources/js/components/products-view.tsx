import { SlidersHorizontal } from 'lucide-react';
import { useProductFilters } from '@/hooks/useProductFilters';
import Layout from '@/layouts/shop/layout';
import type { ProductsViewProps } from '@/types/shop';
import { Breadcrumbs } from './breadcrumbs';
import CategoryFiltersSidebar from './category-filters-sidebar';
import ProductGrid from './product-grid';
import { SortSelect } from './sort-select';
import { Button } from './ui/button';
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from './ui/drawer';

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
                {/* Mobile Filter Button */}
                <div className="lg:hidden">
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button variant="outline">
                                <SlidersHorizontal />
                                Filter & Sortierung
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Filter & Sortierung</DrawerTitle>
                            </DrawerHeader>
                            <div className="space-y-4 overflow-y-auto p-4">
                                <div className="flex items-center justify-between">
                                    Sortierung
                                    <SortSelect value={sort} />
                                </div>
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
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
                {/* Desktop Sidebar */}
                <div className="hidden lg:grid">
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
                </div>

                <div className="space-y-6">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <div className="hidden items-center justify-between sm:flex">
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
