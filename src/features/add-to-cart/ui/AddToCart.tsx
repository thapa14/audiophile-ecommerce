import { useAddToCart } from 'features/add-to-cart/modal/useAddToCart';
import { QuantityCounter } from 'features/add-to-cart/ui/QuantityCounter';
import { type FC } from 'react';
import { Button } from 'shared/ui';

export const AddToCart: FC = () => {
    const { addToCartHandler, quantity, setQuantity } = useAddToCart();

    return (
        <div className="flex gap-x-4">
            <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
            <Button variant="contained" className="uppercase" onClick={addToCartHandler}>
                Add To Cart
            </Button>
        </div>
    );
};
