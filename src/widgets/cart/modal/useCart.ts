import { useCartContext } from 'entities/cart';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

export const useCart = () => {
    const navigate = useNavigate();
    const { hideCart } = useCartContext();

    const onCheckout = useCallback(() => {
        navigate('/checkout');
        hideCart();
    }, [hideCart, navigate]);

    return { onCheckout };
};
