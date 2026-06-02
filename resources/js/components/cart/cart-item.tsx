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
        <div className="flex flex-col gap-4 space-y-1 p-4 md:flex-row md:items-center md:gap-5">
            <img
                src={
                    item.image !== null
                        ? `/${item.image}`
                        : 'https://avatar.vercel.sh/shadcn1'
                }
                alt={item.name}
                className="h-40 w-full object-contain md:h-auto md:w-40"
            />
            <div className="min-w-0 flex-1">
                <LinkAnimated
                    href={route('products.show', { product: item.slug })}
                    className="min-w-0 wrap-break-word whitespace-normal"
                >
                    <h3 className="text-lg font-medium">{item.name}</h3>
                </LinkAnimated>
                <p className="text-lg font-bold">{item.price} €</p>
                <UnitPrice
                    pricePerKg={item.pricePerKg}
                    pricePerL={item.pricePerL}
                />
            </div>
            <div className="flex items-center justify-between gap-4 md:justify-end">
                <CounterField
                    maxNumber={item.stock}
                    initialValue={item.quantity}
                    onChange={handleQuantityChange}
                />
                <Button title="Produkt entfernen" onClick={handleRemove}>
                    <Trash />
                </Button>
            </div>
        </div>
    );
}
