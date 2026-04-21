import { Head, Link, router } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import CheckboxWithLabel from '@/components/checkbox-with-label';
import ProductCard from '@/components/product-card';
import { SortSelect } from '@/components/sort-select';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/layouts/shop/layout';
import { replaceUmlauts } from '@/lib/text-normalizer';
import type { Category, Product } from '@/types/shop';

type Props = {
    category: Category;
    categories: Category[];
    products: Product[];
    filters: {
        sort?: string;
        available?: boolean;
    };
};

export default function Show({
    category,
    categories,
    products,
    filters,
}: Props) {
    const sort = filters.sort ?? '';
    const available = filters.available ?? false;
    const hasActiveFilters = !!sort || available;

    const categoryName = replaceUmlauts(category.name);

    const handleSortChange = (value: string) => {
        router.get(
            `/categories/${category.slug}`,
            {
                sort: value || undefined,
                available: available ? 1 : undefined,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            },
        );
    };

    const toggleAvailableFilter = (checked: boolean) => {
        router.get(
            `/categories/${category.slug}`,
            {
                sort: sort || undefined,
                available: checked ? 1 : undefined,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            },
        );
    };

    const resetFilters = () => {
        router.get(
            `/categories/${category.slug}`,
            {},
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            },
        );
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
                    <aside className="space-y-6">
                        <Card>
                            <CardContent>
                                <h2 className="mb-4 text-lg font-semibold">
                                    Kategorien
                                </h2>

                                <nav className="flex flex-col gap-2">
                                    {categories.map((item) => {
                                        const isActive =
                                            item.id === category.id;

                                        return (
                                            <Link
                                                key={item.id}
                                                href={`/categories/${item.slug}`}
                                                className={[
                                                    'rounded-md px-2 py-1 transition-colors',
                                                    isActive
                                                        ? 'bg-muted font-semibold'
                                                        : '',
                                                ].join(' ')}
                                            >
                                                {replaceUmlauts(item.name)}
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <h2 className="mb-4 text-lg font-semibold">
                                    Verfügbarkeit
                                </h2>
                                <CheckboxWithLabel
                                    labelName="Auf Lager"
                                    value="available"
                                    id="available"
                                    checked={available}
                                    onCheckedChange={toggleAvailableFilter}
                                />
                            </CardContent>
                        </Card>

                        <div className="text-center">
                            {hasActiveFilters && (
                                <Button onClick={resetFilters}>
                                    <Trash2 />
                                    Sortierung & Filter zurücksetzen
                                </Button>
                            )}
                        </div>
                    </aside>
                    <div className="space-y-6">
                        <h1 className="pb-5 text-3xl font-bold">
                            {replaceUmlauts(category.name)}
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
