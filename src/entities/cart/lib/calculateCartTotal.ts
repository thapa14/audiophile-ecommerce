import type { CartItemsType } from 'entities/cart/modal/types';

export const calculateCartTotal = (cartItems: CartItemsType[]): number => {
    return cartItems.reduce((acc: number, item: CartItemsType) => {
        return acc + item.price * item.quantity;
    }, 0);
};
