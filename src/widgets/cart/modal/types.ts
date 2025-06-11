import type { Product } from 'entities/product';

export type UseCartResult = {
    cartQuantity: number;
    cartItemsWithDetails: Product[];
};
