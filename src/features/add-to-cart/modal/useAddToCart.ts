import { useCallback, useState } from 'react';

export const useAddToCart = () => {
    const [quantity, setQuantity] = useState<number>(1);

    const addToCartHandler = useCallback(() => {}, []);

    return { quantity, setQuantity, addToCartHandler };
};
