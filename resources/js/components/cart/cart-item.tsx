import { router } from '@inertiajs/react';
import { Trash } from 'lucide-react';
import { route } from 'ziggy-js';
import type { CartItem } from '@/types/shop';
import { CounterField } from '../counter-field';
import { Button } from '../ui/button';
import LinkAnimated from '../ui/link-animated';
import UnitPrice from '../unit-price';

interface CartItemProps {
    slug: string;
    item: CartItem;
}

export default function CartItem({ slug, item }: CartItemProps) {
    function handleRemove() {
        router.delete(route('cart.destroy', slug));
    }

    function handleQuantityChange(quantity: number) {
        router.patch(route('cart.update', slug), { quantity });
    }

    return (
        <div className="my-2 flex items-center gap-5 p-2">
            <img
                src={
                    item.image !== null
                        ? `/${item.image}`
                        : 'https://avatar.vercel.sh/shadcn1'
                }
                alt={item.name}
                className="h-auto w-48 pr-10"
            />
            <div className="flex-1">
                <LinkAnimated
                    href={route('products.show', { product: item.slug })}
                    className="min-w-0 break-words whitespace-normal"
                >
                    <h3 className="text-lg">{item.name}</h3>
                </LinkAnimated>
                <p>{item.price}</p>
                <UnitPrice
                    pricePerKg={item.pricePerKg}
                    pricePerL={item.pricePerL}
                />
            </div>
            <CounterField
                maxNumber={item.stock}
                initialValue={item.quantity}
                onChange={handleQuantityChange}
            />
            <Button
                title="Produkt entfernen"
                className="ml-10"
                onClick={handleRemove}
            >
                <Trash />
            </Button>
        </div>
    );
}
