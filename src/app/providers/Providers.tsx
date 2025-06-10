import { CartProvider } from 'entities/cart/modal/CartProvider';
import { type ReactNode } from 'react';

type ProvidersCheck = {
    children: ReactNode;
};

export default function ContextProvider({ children }: ProvidersCheck) {
    return <CartProvider>{children}</CartProvider>;
}
