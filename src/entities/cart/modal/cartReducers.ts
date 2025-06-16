import { changeProductQuantity } from 'entities/cart/lib/increaseProductQuantity';
import {
    ADD_TO_CART,
    HIDE_CART,
    QUANTITY_DECREMENT,
    QUANTITY_INCREMENT,
    REMOVE_ALL_ITEMS,
    SHOW_CART,
} from 'entities/cart/modal/cartActions';
import type { ActionType, CartInitialProps } from 'entities/cart/modal/types';

export const reducer = (state: CartInitialProps, action: ActionType): CartInitialProps => {
    console.log('reducer');
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
    return {} as CartInitialProps;
};
