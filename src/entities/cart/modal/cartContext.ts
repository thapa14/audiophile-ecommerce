import type { CartContextTypes } from 'entities/cart/modal/types';
import { createContext, useContext } from 'react';

export const CartContext = createContext<CartContextTypes | null>(null);

export const useCartContext = () => {
    const context = useContext(CartContext);

    if (!context) throw new Error('useCartContext must be used within CartProvider');
    return context;
};
