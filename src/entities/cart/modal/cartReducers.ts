import { changeProductQuantity } from 'entities/cart/lib/increaseProductQuantity';
import {
    ADD_TO_CART,
    HIDE_CART,
    QUANTITY_DECREMENT,
    QUANTITY_INCREMENT,
    REMOVE_ALL_ITEMS,
    RESET_ALL,
    SHOW_CART,
} from 'entities/cart/modal/cartActions';
import { cartInitials } from 'entities/cart/modal/cartDefaults';
import type { ActionType, CartInitialProps } from 'entities/cart/modal/types';

export const reducer = (state: CartInitialProps, action: ActionType): CartInitialProps => {
    if (action.type === SHOW_CART) {
        return { ...state, isCartOpened: action.payload };
    }
    if (action.type === HIDE_CART) {
        return { ...state, isCartOpened: action.payload };
    }
    if (action.type === ADD_TO_CART) {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
    }
    if (action.type === REMOVE_ALL_ITEMS) {
        return { ...state, cartItems: [] };
    }
    if (action.type === QUANTITY_INCREMENT) {
        return {
            ...state,
            cartItems: changeProductQuantity([...state.cartItems], action.payload, 'INCREMENT'),
        };
    }
    if (action.type === QUANTITY_DECREMENT) {
        return {
            ...state,
            cartItems: changeProductQuantity(state.cartItems, action.payload, 'DECREMENT'),
        };
    }
    if (action.type === RESET_ALL) {
        return cartInitials;
    }
    return {} as CartInitialProps;
};
