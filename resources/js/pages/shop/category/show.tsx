import { Head, router } from '@inertiajs/react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import CategoryFiltersSidebar from '@/components/category-filters-sidebar';
import ProductCard from '@/components/product-card';
import { SortSelect } from '@/components/sort-select';
import Layout from '@/layouts/shop/layout';
import { replaceUmlauts } from '@/lib/text-normalizer';
import type { Category, Product } from '@/types/shop';

type Props = {
    category: Category;
    categories: Category[];
    products: Product[];
    brands: string[];
    filters: {
        sort?: string;
        available?: boolean;
        brands?: string[];
    };
};

export default function Show({
    category,
    categories,
    products,
    brands,
    filters,
}: Props) {
    const sort = filters.sort ?? '';
    const available = filters.available ?? false;
    const selectedBrands = filters.brands ?? [];
    const hasActiveFilters = !!sort || available || selectedBrands.length > 0;

    const categoryName = replaceUmlauts(category.name);

    const showWithFilters = (nextFilters?: {
        sort?: string;
        available?: boolean;
        brands?: string[];
    }) => {
        router.get(
            `/categories/${category.slug}`,
            {
                sort: nextFilters?.sort || undefined,
                available: nextFilters?.available ? 1 : undefined,
                brands: nextFilters?.brands?.length
                    ? nextFilters.brands
                    : undefined,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            },
        );
    };

    const handleSortChange = (value: string) => {
        showWithFilters({
            sort: value,
            available,
            brands: selectedBrands,
        });
    };

    const toggleAvailableFilter = (checked: boolean) => {
        showWithFilters({
            sort,
            available: checked,
            brands: selectedBrands,
        });
    };

    const toggleBrandFilter = (brand: string, checked: boolean) => {
        const nextBrands = checked
            ? [...selectedBrands, brand]
            : selectedBrands.filter((item) => item !== brand);

        showWithFilters({
            sort,
            available,
            brands: nextBrands,
        });
    };

    const resetFilters = () => {
        showWithFilters();
    };

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
                        <h1 className="pb-5 text-3xl font-bold">
                            {categoryName}
                        </h1>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    {products.length} Artikel
                                </p>
                            </div>
                            <div>
                                <SortSelect
                                    value={sort}
                                    onValueChange={handleSortChange}
                                />
                            </div>
                        </div>

                        {products.length > 0 ? (
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                {products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        imageSrc={
                                            product.images?.[0]
                                                ? `/${product.images[0]}`
                                                : null
                                        }
                                        title={product.name}
                                        category={product.category?.name}
                                        totalPrice={product.price}
                                        pricePerL={product.pricePerL}
                                        pricePerKg={product.pricePerKg}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div>Leider wurden keine Artikel gefunden :(</div>
                        )}
                    </div>
                </div>
            </Layout>
        </>
    );
}
