import Layout from '@/layouts/shop/layout';
import type { Category, Product } from '@/types/shop';

type Props = {
    category: Category;
};

export default function Show({ category }: Props) {
    return (
        <Layout>
            <h1 className="text-2xl font-bold">{category.name}</h1>
        </Layout>
    );
}
