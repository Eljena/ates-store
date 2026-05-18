export const Role = {
    Admin: 'admin',
    ProductManager: 'product_manager',
    Customer: 'customer',
} as const;

export type RoleType = typeof Role[keyof typeof Role];