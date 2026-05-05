import { route } from 'ziggy-js';
import type { Product } from '@/types/shop';
import ProductCard from './product-card';

type ProductGridProps = {
    products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
    if (products.length === 0) {
        return <div>Leider wurden keine Artikel gefunden :(</div>;
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product_id={product.id}
                    imageSrc={
                        product.images?.[0] ? `/${product.images[0]}` : null
                    }
                    title={product.name}
                    href={route('products.show', product.id)}
                    category={product.category?.name}
                    totalPrice={product.price}
                    pricePerL={product.pricePerL}
                    pricePerKg={product.pricePerKg}
                />
            ))}
        </div>
    );
}
