import { route } from 'ziggy-js';
import type { Product } from '@/types/shop';
import ProductCard from './product-card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './ui/carousel';

type ProductCarouselProps = {
    products: Product[];
};

export default function ProductCarousel({ products }: ProductCarouselProps) {
    return (
        <Carousel className="w-full px-12">
            <CarouselContent>
                {products.map((product) => (
                    <CarouselItem
                        key={product.id}
                        className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                        <ProductCard
                            imageSrc={
                                product?.images[0]
                                    ? `/${product.images[0]}`
                                    : '#'
                            }
                            title={product.name}
                            href={route('products.show', product.id)}
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
    );
}
