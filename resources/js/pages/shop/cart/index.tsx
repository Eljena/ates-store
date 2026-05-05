import { Head } from '@inertiajs/react';
import CartItem from '@/components/cart/cart-item';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
                                {Object.entries(items).map(([slug, item]) => (
                                    <CartItem
                                        key={slug}
                                        item={item}
                                        slug={slug}
                                    />
                                ))}
                                <Separator />
                            </div>
                            <div className="ml-10">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">
                                            Bestellübersicht
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div className="flex w-xs justify-between">
                                                <p>{itemCount} Artikel</p>
                                                <p>2,99 €</p>
                                            </div>
                                            <div className="flex w-xs justify-between">
                                                <p>Versand</p>
                                                <p>5,00 €</p>
                                            </div>
                                            <Separator />
                                            <div>
                                                <div className="flex w-xs justify-between text-lg font-bold">
                                                    <p>Gesamt (inkl. MwSt.)</p>
                                                    <p>{total} €</p>
                                                </div>
                                                <div className="flex w-xs justify-between text-sm">
                                                    <p>enthaltene MwSt.</p>
                                                    <p>2,34 €</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </>
                    )}
                </div>
            </Layout>
        </>
    );
}
