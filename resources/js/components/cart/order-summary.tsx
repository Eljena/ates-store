import { BadgeEuro } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

interface OrderSummaryProps {
    itemCount: number;
    total: number;
}

export default function OrderSummary({ itemCount, total }: OrderSummaryProps) {
    const shipping = 5.0;
    const vat = (total / 1.19) * 0.19;
    const totalWithShipping = total + shipping;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">Bestellübersicht</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    <div className="flex w-xs justify-between">
                        <p>{itemCount} Artikel</p>
                        <p>{total.toFixed(2)} €</p>
                    </div>
                    <div className="flex w-xs justify-between">
                        <p>Versand</p>
                        <p>{shipping.toFixed(2)} €</p>
                    </div>
                    <Separator />
                    <div>
                        <div className="flex w-xs justify-between text-lg font-bold">
                            <p>Gesamt (inkl. MwSt.)</p>
                            <p>{totalWithShipping.toFixed(2)} €</p>
                        </div>
                        <div className="flex w-xs justify-between text-sm">
                            <p>enthaltene MwSt.</p>
                            <p>{vat.toFixed(2)} €</p>
                        </div>
                    </div>
                    <div className="flex justify-center pt-10">
                        <Button
                            className="w-full text-lg font-bold"
                            title="Zur Kasse"
                        >
                            Zur Kasse
                            <BadgeEuro className="size-5" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
