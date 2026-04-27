import { router } from "@inertiajs/react";

type Filters = {
    sort?: string;
    available?: boolean;
    brands?: string[];
}

export function useProductFilters(url: string, current: Filters) {
    const { sort, available = false, brands: selectedBrands = [] } = current;

    const apply = (next: Filters = {}) => {
        router.get(
            url,
            {
                sort: next.sort || undefined,
                available: next.available ? 1 : undefined,
                brands: next.brands?.length ? next.brands : undefined,
            },
            { preserveState: true, preserveScroll: true, replace: true },
        );
    };

    return {
        sort: sort || undefined,
        available,
        selectedBrands,
        hasActiveFilters: !!sort || available || selectedBrands.length > 0,
        handleSortChange: (value: string) =>
            apply({ sort: value, available, brands: selectedBrands }),
        toggleAvailableFilter: (checked: boolean) =>
            apply({ sort, available: checked, brands: selectedBrands }),
        toggleBrandFilter: (brand: string, checked: boolean) =>
            apply({
                sort,
                available,
                brands: checked
                    ? [...selectedBrands, brand]
                    : selectedBrands.filter((b) => b !== brand),
            }),
        resetFilters: () => apply(),
    };
}