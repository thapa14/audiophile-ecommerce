import {
    ADD_TO_CART,
    HIDE_CART,
    QUANTITY_DECREMENT,
    QUANTITY_INCREMENT,
    REMOVE_ALL_ITEMS,
    RESET_ALL,
    SHOW_CART,
} from 'entities/cart/modal/cartActions';

/**
 *  Cart Items -> it will take item id and quantity
 */
export type CartItemsType = { id: number; quantity: number; price: number };

/**
 *  cart context default initial types
 */
export type CartInitialProps = {
    isCartOpened: boolean;
    cartItems: CartItemsType[];
};

/**
 * context api passed data that will be available to the project.
 */
export type CartContextTypes = CartInitialProps & {
    showCart: () => void;
    hideCart: () => void;
    addToCart: (pId: number, quantity: number, price: number) => void;
    onRemoveAll: () => void;
    onProductQuantityIncrement: (pId: number) => void;
    onProductQuantityDecrement: (pId: number) => void;
    onResetAll: () => void;
};

/**
 * reducers actions type.
 */
export type ActionType =
    | { type: typeof SHOW_CART; payload: boolean }
    | { type: typeof HIDE_CART; payload: boolean }
    | { type: typeof ADD_TO_CART; payload: CartItemsType }
    | { type: typeof REMOVE_ALL_ITEMS }
    | { type: typeof RESET_ALL }
    | { type: typeof QUANTITY_INCREMENT; payload: number }
    | { type: typeof QUANTITY_DECREMENT; payload: number };
