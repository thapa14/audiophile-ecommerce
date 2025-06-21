import {
    ADD_TO_CART,
    HIDE_CART,
    QUANTITY_DECREMENT,
    QUANTITY_INCREMENT,
    REMOVE_ALL_ITEMS,
    RESET_ALL,
    SHOW_CART,
} from 'entities/cart/modal/cartActions';
import { CartContext } from 'entities/cart/modal/cartContext';
import { cartInitials } from 'entities/cart/modal/cartDefaults';
import { reducer } from 'entities/cart/modal/cartReducers';
import { type ReactNode, useCallback, useMemo, useReducer } from 'react';

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, cartInitials);

    const showCart = useCallback(() => {
        dispatch({ type: SHOW_CART, payload: true });
    }, []);
    const hideCart = useCallback(() => {
        dispatch({ type: HIDE_CART, payload: false });
    }, []);

    const addToCart = useCallback((pId: number, quantity: number, price: number): void => {
        dispatch({ type: ADD_TO_CART, payload: { id: pId, quantity, price } });
    }, []);

    const onRemoveAll = useCallback(() => {
        dispatch({ type: REMOVE_ALL_ITEMS });
    }, []);

    const onProductQuantityIncrement = useCallback((pId: number) => {
        dispatch({ type: QUANTITY_INCREMENT, payload: pId });
    }, []);

    const onProductQuantityDecrement = useCallback((pId: number) => {
        dispatch({ type: QUANTITY_DECREMENT, payload: pId });
    }, []);

    const onResetAll = useCallback(() => {
        dispatch({ type: RESET_ALL });
    }, []);

    const contextState = useMemo(
        () => ({
            ...state,
            showCart,
            hideCart,
            addToCart,
            onRemoveAll,
            onResetAll,
            onProductQuantityIncrement,
            onProductQuantityDecrement,
        }),
        [
            hideCart,
            showCart,
            state,
            addToCart,
            onRemoveAll,
            onResetAll,
            onProductQuantityIncrement,
            onProductQuantityDecrement,
        ]
    );

    return <CartContext.Provider value={contextState}>{children}</CartContext.Provider>;
};
