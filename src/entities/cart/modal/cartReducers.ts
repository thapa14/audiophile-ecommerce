import { HIDE_CART, SHOW_CART } from 'entities/cart/modal/cartActions';
import type { ActionType, CartInitialProps } from 'entities/cart/modal/types';

export const reducer = (state: CartInitialProps, action: ActionType) => {
    if (action.type === SHOW_CART) {
        return { ...state, isCartOpened: action.payload };
    }
    if (action.type === HIDE_CART) {
        return { ...state, isCartOpened: action.payload };
    }
    return state;
};
