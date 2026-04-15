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

export default function Home() {
    return (
        <Layout>
            <section>
                <div>
                    <div className="relative">
                        <img
                            className="h-100 w-7xl rounded-md object-cover"
                            src="../images/philippines-landingpage.jpg"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2">
                            <h1 className="py-4 text-center text-3xl font-bold text-white">
                                Willkommen bei Ate's store
                            </h1>
                        </div>
                    </div>

                    <HomeSection title="Kategorien">
                        <div className="grid grid-cols-3 gap-5">
                            <div className="bg-amber-300 px-20 py-10">Reis</div>
                            <div className="bg-blue-300 px-20 py-10">
                                Sojasauce
                            </div>
                            <div className="bg-red-300 px-20 py-10">
                                Instantnudeln
                            </div>
                            <div className="bg-amber-300 px-20 py-10">
                                Instantnudeln
                            </div>
                            <div className="bg-blue-300 px-20 py-10">
                                Getränke
                            </div>
                            <div className="bg-red-300 px-20 py-10">Sushi</div>
                        </div>
                    </HomeSection>

                    <HomeSection title="Empfohlene Produkte">
                        <Carousel className="w-full px-12">
                            <CarouselContent>
                                <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <ProductCard
                                        imageSrc="https://avatar.vercel.sh/shadcn1"
                                        title="Reis XY"
                                        category="Reis"
                                        totalPrice="1,99€"
                                        pricePerKg="4,99€"
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <ProductCard
                                        imageSrc="https://avatar.vercel.sh/shadcn1"
                                        title="Reis XY"
                                        category="Reis"
                                        totalPrice="1,99€"
                                        pricePerKg="4,99€"
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <ProductCard
                                        imageSrc="https://avatar.vercel.sh/shadcn1"
                                        title="Reis XY"
                                        category="Reis"
                                        totalPrice="1,99€"
                                        pricePerKg="4,99€"
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <ProductCard
                                        imageSrc="https://avatar.vercel.sh/shadcn1"
                                        title="Reis XY"
                                        category="Reis"
                                        totalPrice="1,99€"
                                        pricePerKg="4,99€"
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <ProductCard
                                        imageSrc="https://avatar.vercel.sh/shadcn1"
                                        title="Reis XY"
                                        category="Reis"
                                        totalPrice="1,99€"
                                        pricePerKg="4,99€"
                                    />
                                </CarouselItem>
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
