import { PlusCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

type ProductCardProps = {
    imageSrc: string;
    title: string;
    category: string;
    totalPrice: string;
    pricePerKg?: string;
    pricePerL?: string;
};

export default function ProductCard({
    imageSrc,
    title,
    category,
    totalPrice,
    pricePerKg,
    pricePerL,
}: ProductCardProps) {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src={imageSrc}
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardAction>
                    <Badge variant="secondary">{category}</Badge>
                </CardAction>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    <p className="py-1 text-lg font-bold text-black">
                        {totalPrice}
                    </p>
                    {pricePerKg && <p>{pricePerKg} pro 1 kg</p>}
                    {pricePerL && <p>{pricePerL} pro 1 L</p>}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">
                    <PlusCircle />
                    Zum Warenkorb hinzufügen
                </Button>
            </CardFooter>
        </Card>
    );
}
