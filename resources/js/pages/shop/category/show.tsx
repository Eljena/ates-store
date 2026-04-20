import { Head } from '@inertiajs/react';
import { SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import ProductCard from '@/components/product-card';
import { SortSelect } from '@/components/sort-select';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LinkAnimated from '@/components/ui/link-animated';
import Layout from '@/layouts/shop/layout';
import { replaceUmlauts } from '@/lib/text-normalizer';
import type { Category, Product } from '@/types/shop';

type Props = {
    category: Category & {
        products: Product[];
    };
};

export default function Show({ category }: Props) {
    const [sort, setSort] = useState('');

    const categoryName = replaceUmlauts(category.name);

    return (
        <>
            <Head title={category.name} />
            <Layout>
                <div className="pb-5">
                    <Breadcrumbs
                        breadcrumbs={[
                            { title: 'Startseite', href: '/' },
                            { title: categoryName, href: '/' },
                        ]}
                    />
                </div>
                <div>
                    <h1 className="pb-5 text-3xl font-bold">
                        {replaceUmlauts(category.name)}
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
                    <aside className="space-y-6">
                        <Card className="bg-gray-100">
                            <CardContent>
                                <h2 className="mb-4 text-lg font-semibold">
                                    Kategorien
                                </h2>

                                <nav className="flex flex-col gap-2">
                                    <LinkAnimated href="/">
                                        {replaceUmlauts(category.name)}
                                    </LinkAnimated>
                                    {/* Wie kann ich hier alle anderen Kategorien zeigen? */}
                                </nav>
                            </CardContent>
                        </Card>
                    </aside>
                    <div className="space-y-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm text-gray-500">
                                {category.products.length} Artikel
                            </p>

                            <div className="flex gap-3">
                                <SortSelect
                                    value={sort}
                                    onValueChange={setSort}
                                />
                                <Button variant="outline">
                                    <SlidersHorizontal />
                                    Filtern
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                            {category.products.map((product) => (
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
                    </div>
                </div>
            </Layout>
        </>
    );
}
