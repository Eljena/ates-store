import { Head, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { replaceUmlauts } from '@/lib/text-normalizer';

interface Category {
    id: number;
    name: string;
}

interface Props {
    categories: Category[];
}

export default function AdminProductsCreate({ categories }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        brand: '',
        price: '',
        pricePerKg: '',
        pricePerL: '',
        stock: '',
        description: '',
        category_id: '',
    });

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        post(route('admin.products.store'));
    }

    return (
        <>
            <Head title={'Produkt erstellen'} />
            <div className="max-w-lg p-6">
                <h1 className="mb-6 text-2xl font-semibold">Neues Produkt</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        {errors.name && <InputError message={errors.name} />}
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="brand">Marke</Label>
                        <Input
                            id="brand"
                            value={data.brand}
                            onChange={(e) => setData('brand', e.target.value)}
                        />
                        {errors.brand && <InputError message={errors.brand} />}
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="category_id">Kategorie</Label>
                        <Select
                            value={data.category_id}
                            onValueChange={(value) =>
                                setData('category_id', value)
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Kategorie wählen" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category) => (
                                    <SelectItem
                                        key={category.id}
                                        value={String(category.id)}
                                    >
                                        {replaceUmlauts(category.name)}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.category_id && (
                            <InputError message={errors.category_id} />
                        )}
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="price">Preis (€)</Label>
                        <Input
                            id="price"
                            type="number"
                            step="0.01"
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                        />
                        {errors.price && <InputError message={errors.price} />}
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="pricePerKg">
                            Preis pro kg (optional)
                        </Label>
                        <Input
                            id="pricePerKg"
                            type="number"
                            step="0.01"
                            value={data.pricePerKg}
                            onChange={(e) =>
                                setData('pricePerKg', e.target.value)
                            }
                        />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="pricePerL">
                            Preis pro L (optional)
                        </Label>
                        <Input
                            id="pricePerL"
                            type="number"
                            step="0.01"
                            value={data.pricePerL}
                            onChange={(e) =>
                                setData('pricePerL', e.target.value)
                            }
                        />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="stock">Lagerbestand</Label>
                        <Input
                            id="stock"
                            type="number"
                            value={data.stock}
                            onChange={(e) => setData('stock', e.target.value)}
                        />
                        {errors.stock && <InputError message={errors.stock} />}
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="description">
                            Beschreibung (optional)
                        </Label>
                        <Textarea
                            id="description"
                            value={data.description}
                            onChange={(e) =>
                                setData('description', e.target.value)
                            }
                        />
                    </div>

                    <div className="flex gap-2">
                        <Button type="submit" disabled={processing}>
                            Produkt erstellen
                        </Button>
                        <Button
                            variant="outline"
                            type="button"
                            onClick={() => window.history.back()}
                        >
                            Abbrechen
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}

AdminProductsCreate.Layout = {
    breadcrumbs: [
        {
            title: 'Admin',
            href: '/admin',
        },
    ],
};
