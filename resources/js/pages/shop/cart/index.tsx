import { Head } from '@inertiajs/react';
import CartItem from '@/components/cart/cart-item';
import OrderSummary from '@/components/cart/order-summary';
import { Separator } from '@/components/ui/separator';
import Layout from '@/layouts/shop/layout';
import type { CartProps } from '@/types/shop';

export default function Index({ items, total }: CartProps) {
    const itemCount = Object.values(items).reduce(
        (sum, item) => sum + item.quantity,
        0,
    );

    return (
        <>
            <Head title="Warenkorb" />
            <Layout>
                <h1 className="mb-5 text-3xl font-bold">
                    Warenkorb{' '}
                    <span className="text-gray-500">({itemCount} Artikel)</span>
                </h1>
                <div className="flex">
                    {Object.keys(items).length == 0 ? (
                        <div className="flex min-h-64 w-full items-center justify-center">
                            <p className="text-lg font-bold">
                                Dein Warenkorb ist leer.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="flex-1">
                                <Separator />
                                {Object.entries(items).map(
                                    ([slug, item], index, array) => (
                                        <div key={slug}>
                                            <CartItem item={item} slug={slug} />
                                            {index < array.length - 1 && (
                                                <Separator />
                                            )}
                                        </div>
                                    ),
                                )}
                            </div>
                            <div className="ml-10">
                                <OrderSummary
                                    itemCount={itemCount}
                                    total={total}
                                />
                            </div>
                        </>
                    )}
                </div>
            </Layout>
        </>
    );
}
