import Layout from '@/layouts/shop/layout';
import type { Category, Product } from '@/types/shop';

type Props = {
    category: Category;
};

export default function Show({ category }: Props) {
    return (
        <Layout>
            <div>{category.name}</div>
        </Layout>
    );
}
