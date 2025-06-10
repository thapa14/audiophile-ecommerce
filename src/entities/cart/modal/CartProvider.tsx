import { HIDE_CART, SHOW_CART } from 'entities/cart/modal/cartActions';
import { reducer } from 'entities/cart/modal/cartReducers';
import { CartContext } from 'entities/cart/modal/cartContext';
import type { CartInitialProps } from 'entities/cart/modal/types';
import { type ReactNode, useCallback, useMemo, useReducer } from 'react';

const initialState: CartInitialProps = {
    isCartOpened: false,
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const showCart = useCallback(() => {
        dispatch({ type: SHOW_CART, payload: true });
    }, []);
    const hideCart = useCallback(() => {
        dispatch({ type: HIDE_CART, payload: false });
    }, []);

    const contextState = useMemo(
        () => ({
            ...state,
            showCart,
            hideCart,
        }),
        [hideCart, showCart, state]
    );

    return <CartContext.Provider value={contextState}>{children}</CartContext.Provider>;
};
