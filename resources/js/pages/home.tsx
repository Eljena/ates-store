import HomeSection from '@/components/home-section';
import ProductCard from '@/components/product-card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Layout from '@/layouts/shop/layout';
import { replaceUmlauts } from '@/lib/text-normalizer';
import type { Category, Product } from '@/types/shop';
import { Link } from '@inertiajs/react';

type HomeProps = {
    categories: Category[];
    products: Product[];
};

export default function Home({ categories, products }: HomeProps) {
    return (
        <Layout>
            <section>
                <div>
                    <div className="relative">
                        <img
                            className="h-100 w-7xl rounded-md object-cover"
                            src="../images/philippines-landingpage.jpg"
                        />
                        <div className="absolute inset-0 rounded-md bg-black/40" />
                        <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2">
                            <h1 className="py-4 text-center text-3xl font-bold text-white">
                                Willkommen bei Ate's store
                            </h1>
                        </div>
                    </div>

                    <HomeSection title="Kategorien">
                        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
                            {categories.map((category) => (
                                <Link href={`/categories/${category.slug}`}>
                                    <div
                                        key={category.id}
                                        className="relative h-32 overflow-hidden rounded bg-gray-300 md:h-52"
                                    >
                                        {category.image && (
                                            <img
                                                src={`/${category.image}`}
                                                alt={category.name}
                                                className="md:h-52 md:w-52"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-black/40" />
                                        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-lg font-bold text-white text-shadow-accent">
                                            {replaceUmlauts(category.name)}
                                        </h2>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </HomeSection>

                    <HomeSection title="Empfohlene Produkte">
                        <Carousel className="w-full px-12">
                            <CarouselContent>
                                {products.map((product) => (
                                    <CarouselItem
                                        key={product.id}
                                        className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                                    >
                                        <ProductCard
                                            imageSrc={product?.images[0]}
                                            title={product.name}
                                            category={product.category?.name}
                                            totalPrice={product.price}
                                            pricePerL={product.pricePerL}
                                            pricePerKg={product.pricePerKg}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2" />
                            <CarouselNext className="right-2" />
                        </Carousel>
                    </HomeSection>
                </div>
            </section>
        </Layout>
    );
}
