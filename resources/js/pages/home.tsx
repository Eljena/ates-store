import logo from '@/assets/images/ates-store-logo.png';
import { Card, CardContent } from '@/components/ui/card';
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
                    <h1 className="py-4 text-center text-3xl font-bold">
                        Willkommen bei Ate's store
                    </h1>
                    <Carousel className="mx-auto flex max-w-6xl">
                        <CarouselContent>
                            <CarouselItem>
                                <Card>
                                    <CardContent className="flex h-70 w-7xl">
                                        <div className="h-105 w-full bg-white">
                                            <img
                                                className="h-full w-full object-contain"
                                                src="/images/beispiel1.jpg"
                                                alt="beispiel1"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            <CarouselItem>
                                <Card>
                                    <CardContent className="flex h-70 w-7xl">
                                        <div className="">
                                            <img
                                                className="object-fit h-auto w-auto"
                                                src="../images/products/rice/reis1.jpg"
                                                alt="logo"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            <CarouselItem>
                                <Card>
                                    <CardContent className="h-70 w-7xl">
                                        <div className="">
                                            {/* <img
                                                className=""
                                                src="../images/beispiel1.jpg"
                                                alt="logo"
                                            /> */}
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>
        </Layout>
    );
}
