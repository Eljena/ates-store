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
    brand: string;
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

export type ProductsViewProps = {
    title: string;
    currentCategorySlug?: string;
    filterUrl: string;
    categories: Category[];
    products: Product[];
    brands: string[];
    filters: CategoryFilters;
};

export type ShowProps = ProductsViewProps & {
    category: Category;
};

export type IndexProps = Omit<ProductsViewProps, 'title' | 'currentCategorySlug'>;

export type CartItem = {
    product_id: number;
    quantity: number;
    price: string;
    name: string;
    slug: string;
    stock: number;
    pricePerKg?: string;
    pricePerL?: string;
};

export type CartProps = {
    items: Record<string, CartItem>;
    total: number;
};