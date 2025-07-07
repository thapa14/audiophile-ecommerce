import { useAddToCart } from 'features/add-to-cart/modal/useAddToCart';
import type { AddToCartProps } from 'features/add-to-cart/ui/AddToCart.types';
import { type FC } from 'react';
import { Button } from 'shared/ui';
import { QuantityCounter } from 'shared/ui/quantityCounter/QuantityCounter';

export const AddToCart: FC<AddToCartProps> = ({ pId, price }) => {
    const { quantity, onIncrement, onDecrement, onQuantityChange, onAddToCart, hasAlreadyAdded } =
        useAddToCart({
            productId: pId,
        });

    return (
        <div className="flex gap-x-4">
            {hasAlreadyAdded ? (
                <>
                    <Button variant="contained">Remove from Cart</Button>
                </>
            ) : (
                <>
                    <QuantityCounter
                        className="w-30"
                        quantity={quantity}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onQuantityChange={onQuantityChange}
                    />
                    <Button
                        variant="contained"
                        className="uppercase"
                        onClick={() => onAddToCart(pId, price)}
                    >
                        Add To Cart
                    </Button>
                </>
            )}
        </div>
    );
};
