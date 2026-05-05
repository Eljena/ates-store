import { Head, router } from '@inertiajs/react';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { route } from 'ziggy-js';
import { CounterField } from '@/components/counter-field';
import HomeSection from '@/components/home-section';
import ProductCarousel from '@/components/product-carousel';
import { Button } from '@/components/ui/button';
import UnitPrice from '@/components/unit-price';
import Layout from '@/layouts/shop/layout';
import type { Product } from '@/types/shop';

type ShowProps = {
    relatedProducts: Product[];
    product: Product;
};

export default function Show({ product, relatedProducts }: ShowProps) {
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <Head title={product.name} />
            <Layout>
                <div className="mb-10 flex items-center justify-center gap-5">
                    <div className="w-md">
                        {product.images ? (
                            <img
                                src={
                                    product.images?.[0]
                                        ? `/${product.images[0]}`
                                        : '#'
                                }
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center bg-amber-200">
                                Bild ist nicht verfügbar
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-10 p-5">
                        <h2 className="text-3xl font-bold">{product.name}</h2>
                        <div>
                            <p className="text-2xl font-bold">
                                {product.price} €
                            </p>
                            <UnitPrice
                                pricePerKg={product.pricePerKg}
                                pricePerL={product.pricePerL}
                            />
                        </div>
                        <div>
                            <p>Hersteller: {product.brand}</p>
                            <p>Beschreibung: {product.description}</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <CounterField
                                maxNumber={product.stock}
                                onChange={setQuantity}
                            />
                            <p>Menge</p>
                        </div>
                        <Button
                            onClick={() =>
                                router.post(route('cart.store'), {
                                    product_id: product.id,
                                    quantity,
                                })
                            }
                        >
                            <ShoppingCart />
                            In den Warenkorb
                        </Button>
                    </div>
                </div>
                <HomeSection title="Weitere Artikel" className="border-t">
                    <ProductCarousel products={relatedProducts} />
                </HomeSection>
            </Layout>
        </>
    );
}
