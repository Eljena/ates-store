export type Category = {
    id: number;
    name: string;
    slug: string;
    image?: string | null;
};

export type Product = {
    id: number;
    category_id: number;
    name: string;
    slug: string;
    price: string;
    pricePerL: string;
    pricePerKg: string;
    stock: number;
    images?: string[] | null;
    description?: string | null;
    category?: Category;
};

export type CategoryFilters = {
    sort?: string;
    available?: boolean;
    brands?: string[];
};

export type ShowProps = {
    category: Category;
    categories: Category[];
    products: Product[];
    brands: string[];
    filters: CategoryFilters;
};
