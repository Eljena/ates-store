type UnitPriceProps = {
    pricePerKg?: string;
    pricePerL?: string;
};

export default function UnitPrice({ pricePerKg, pricePerL }: UnitPriceProps) {
    return pricePerKg ? (
        <p>{pricePerKg} € pro 1 kg</p>
    ) : (
        <p>{pricePerL} € pro 1 L</p>
    );
}
