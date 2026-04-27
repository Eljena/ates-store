import Layout from '@/layouts/shop/layout';
import type { Product } from '@/types/shop';

type Props = {
    products: Product[];
};

export default function Index({ products }: Props) {
    return (
        <Layout>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        {product.name} - {product.price}
                    </div>
                ))}
            </div>
        </Layout>
    );
}
