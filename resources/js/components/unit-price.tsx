import { cn } from '@/lib/utils';

type UnitPriceProps = {
    pricePerKg?: string;
    pricePerL?: string;
    className?: string;
};

export default function UnitPrice({
    pricePerKg,
    pricePerL,
    className,
}: UnitPriceProps) {
    return pricePerKg ? (
        <p className={cn(className)}>{pricePerKg} € pro 1 kg</p>
    ) : (
        <p className={cn(className)}>{pricePerL} € pro 1 L</p>
    );
}
