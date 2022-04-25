import type { Product } from '@/models/product';
export const productAdapter = (product: unknown): Product => {
    const {
        id,
        title,
        price,
        description,
        category,
        image,
        createdAt,
        updatedAt,
        rating
    } = product as any;
    return {
        id,
        title,
        price,
        description,
        category,
        image,
        createdAt,
        updatedAt,
        rating: rating || {
            rate: 0,
            count: 3
        }
    };
}