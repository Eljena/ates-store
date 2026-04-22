import { Link } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';
import { replaceUmlauts } from '@/lib/text-normalizer';
import type { Category } from '@/types/shop';
import CheckboxWithLabel from './checkbox-with-label';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

type CategoryFiltersSidebarProps = {
    categories: Category[];
    currentCategorySlug: string;
    available: boolean;
    hasActiveFilters: boolean;
    onResetFilters: () => void;
    onToggleAvailable: (checked: boolean) => void;
};

export default function CategoryFiltersSidebar({
    categories,
    currentCategorySlug,
    available,
    hasActiveFilters,
    onResetFilters,
    onToggleAvailable,
}: CategoryFiltersSidebarProps) {
    return (
        <aside className="space-y-6">
            <Card>
                <CardContent>
                    <h2 className="mb-4 text-lg font-semibold">Kategorien</h2>

                    <nav className="flex flex-col gap-2">
                        {categories.map((item) => {
                            const isActive = item.slug === currentCategorySlug;

                            return (
                                <Link
                                    key={item.id}
                                    href={`/categories/${item.slug}`}
                                    className={[
                                        'rounded-md px-2 py-1 transition-colors',
                                        isActive
                                            ? 'bg-muted font-semibold'
                                            : '',
                                    ].join(' ')}
                                >
                                    {replaceUmlauts(item.name)}
                                </Link>
                            );
                        })}
                    </nav>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <h2 className="mb-4 text-lg font-semibold">
                        Verfügbarkeit
                    </h2>
                    <CheckboxWithLabel
                        labelName="Auf Lager"
                        value="available"
                        id="available"
                        checked={available}
                        onCheckedChange={onToggleAvailable}
                    />
                </CardContent>
            </Card>

            <div className="text-center">
                {hasActiveFilters && (
                    <Button onClick={onResetFilters}>
                        <Trash2 />
                        Sortierung & Filter zurücksetzen
                    </Button>
                )}
            </div>
        </aside>
    );
}
