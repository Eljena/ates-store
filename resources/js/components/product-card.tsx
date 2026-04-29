import { Link } from '@inertiajs/react';
import { PlusCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import UnitPrice from './unit-price';

type ProductCardProps = {
    imageSrc?: string | null;
    title: string;
    href: string;
    category?: string;
    totalPrice: string;
    pricePerKg?: string;
    pricePerL?: string;
};

export default function ProductCard({
    imageSrc,
    title,
    href,
    category,
    totalPrice,
    pricePerKg,
    pricePerL,
}: ProductCardProps) {
    return (
        <Card className="relative mx-auto h-full w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video rounded-t-md bg-black/15" />
            <img
                src={imageSrc ? imageSrc : 'https://avatar.vercel.sh/shadcn1'}
                alt={imageSrc ? title : 'Placeholder Image'}
                className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader className="flex-1">
                {category && (
                    <div className="flex justify-end">
                        <Badge variant="secondary" className="w-fit">
                            {category}
                        </Badge>
                    </div>
                )}

                <CardTitle className="line-clamp-2">
                    <Link href={href} className="hover:underline">
                        {title}
                    </Link>
                </CardTitle>
                <CardDescription className="mt-3 space-y-1">
                    <p className="py-1 text-lg font-bold text-black">
                        {totalPrice} €
                    </p>
                    <UnitPrice pricePerKg={pricePerKg} pricePerL={pricePerL} />
                </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
                <Button className="w-full">
                    <PlusCircle />
                    Zum Warenkorb hinzufügen
                </Button>
            </CardFooter>
        </Card>
    );
}
