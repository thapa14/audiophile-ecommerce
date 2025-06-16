import type { CartItemsType } from 'entities/cart/modal/types';

export const getCartTotal = (cartItems: CartItemsType[]): number => {
    return cartItems.reduce((acc: number, item: CartItemsType) => {
        return acc + item.price * item.quantity;
    }, 0);
};
