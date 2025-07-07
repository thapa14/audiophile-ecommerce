import type { CartItemsType } from 'entities/cart';
import { useCartContext } from 'entities/cart';
import { type ChangeEventHandler, useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

export const useAddToCart = ({ productId }: { productId: number }) => {
    const { addToCart, cartItems } = useCartContext();
    
    const itemInCart: CartItemsType | undefined = useMemo(() => {
        return cartItems.find(({ id }) => id === productId);
    }, [cartItems, productId]);

    const [quantity, setQuantity] = useState<number>(itemInCart?.quantity ?? 1);

    const onAddToCart = useCallback(
        (pId: number, price: number) => {
            addToCart(pId, quantity, price);
            toast.success('Added to cart');
        },
        [addToCart, quantity]
    );

    const onDecrement = useCallback(() => {
        setQuantity(prev => {
            if (!prev) {
                return 0;
            }
            return prev - 1;
        });
    }, []);

    const onIncrement = useCallback(() => {
        setQuantity(prev => prev + 1);
    }, []);

    const onQuantityChange: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
        const val = Number(e.target.value);
        if (val > 0 ) {
            setQuantity(Number(val));
        } else {
            setQuantity(0);
        }
    }, []);

    return {
        quantity,
        onIncrement,
        onDecrement,
        onQuantityChange,
        onAddToCart,
        hasAlreadyAdded: Boolean(itemInCart),
    };
};
