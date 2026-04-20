import { Breadcrumbs } from '@/components/breadcrumbs';
import Layout from '@/layouts/shop/layout';
import type { Category } from '@/types/shop';

type Props = {
    category: Category;
};

export default function Show({ category }: Props) {
    return (
        <Layout>
            <div className="pb-5">
                <Breadcrumbs
                    breadcrumbs={[
                        { title: 'Startseite', href: '/' },
                        { title: category.name, href: '/' },
                    ]}
                />
            </div>
            <h1 className="text-2xl font-bold">{category.name}</h1>
        </Layout>
    );
}
