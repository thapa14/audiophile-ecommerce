import ToastContainerProvider from 'app/providers/ToastProvider';
import { CartProvider } from 'entities/cart';
import { type ReactNode } from 'react';

type ProvidersCheck = {
    children: ReactNode;
};

export default function ContextProvider({ children }: ProvidersCheck) {
    return (
        <>
            <ToastContainerProvider />
            <CartProvider>{children}</CartProvider>
        </>
    );
}
