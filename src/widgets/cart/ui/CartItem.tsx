import { useCartContext } from 'entities/cart';
import type { Product } from 'entities/product';
import type { FC } from 'react';
import allProducts from 'shared/data.json';
import { useResponsiveImage } from 'shared/lib/hooks';
import { QuantityCounter } from 'shared/ui';
import type { CartItemProps } from 'widgets/cart/ui/CartItem.types';

export const CartItem: FC<CartItemProps> = ({ data }) => {
    const { onProductQuantityIncrement, onProductQuantityDecrement } = useCartContext();
    const productWithDetails = allProducts.find((item: Product) => item.id === data.id) as Product;
    const { bgImage } = useResponsiveImage(productWithDetails.image);
    return (
        <div className="flex items-center justify-between gap-x-4">
            <div className="product-img h-16 w-16 shrink-0">
                {bgImage && (
                    <img src={bgImage} alt="product" className="h-full w-full rounded-lg" />
                )}
            </div>
            <div className="flex flex-col">
                <p className="font-bold">{productWithDetails.name}</p>
                <p className="text-sm tracking-normal opacity-50">$ {productWithDetails.price}</p>
            </div>
            <QuantityCounter
                className="h-8 w-24 shrink-0"
                quantity={data.quantity}
                onIncrement={() => onProductQuantityIncrement(data.id)}
                onDecrement={() => onProductQuantityDecrement(data.id)}
                onQuantityChange={() => {}}
                inputDisabled={true}
            />
        </div>
    );
};
