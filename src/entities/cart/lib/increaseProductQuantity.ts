import type { CartItemsType } from 'entities/cart/modal/types';

export const changeProductQuantity = (
    allProducts: CartItemsType[],
    productId: number,
    operation: 'INCREMENT' | 'DECREMENT'
) => {
    return allProducts.map((product: CartItemsType) => {
        if (product.id === productId) {
            return {
                ...product,
                quantity: operation === 'INCREMENT' ? product.quantity + 1 : product.quantity - 1,
            };
        }
        return product;
    });
};
