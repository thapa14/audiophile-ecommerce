import { useAddToCart } from 'features/add-to-cart/modal/useAddToCart';
import type { AddToCartProps } from 'features/add-to-cart/ui/AddToCart.types';
import { type FC } from 'react';
import { Button } from 'shared/ui';
import { QuantityCounter } from 'shared/ui/QuantityCounter';

export const AddToCart: FC<AddToCartProps> = ({ pId }) => {
    const { quantity, onIncrement, onDecrement, onQuantityChange, onAddToCart } = useAddToCart();

    return (
        <div className="flex gap-x-4">
            <QuantityCounter
                className="w-30"
                quantity={quantity}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onQuantityChange={onQuantityChange}
            />
            <Button variant="contained" className="uppercase" onClick={() => onAddToCart(pId)}>
                Add To Cart
            </Button>
        </div>
    );
};
