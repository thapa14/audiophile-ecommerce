import { useCartContext } from 'entities/cart';
import { type ChangeEventHandler, useCallback, useState } from 'react';

export const useAddToCart = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const { addToCart } = useCartContext();

    const onAddToCart = useCallback(
        (pId: number) => {
            addToCart(pId, quantity);
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
        if (val >= 0) {
            setQuantity(Number(val));
        } else {
            setQuantity(0);
        }
    }, []);

    return { quantity, onIncrement, onDecrement, onQuantityChange, onAddToCart };
};
