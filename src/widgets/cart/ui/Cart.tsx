import { getCartTotal, useCartContext } from 'entities/cart';
import type { FC } from 'react';
import { Button } from 'shared/ui';
import { useCart } from 'widgets/cart/modal/useCart';
import { CartItem } from 'widgets/cart/ui/CartItem';

export const Cart: FC = () => {
    const { onCheckout } = useCart();
    const { cartItems, onRemoveAll } = useCartContext();
    const cartLength = cartItems.length;
    const cartTotal = getCartTotal(cartItems);

    return (
        <div className="fixed inset-0 top-[90px] z-50 bg-black/50 backdrop-opacity-50">
            {/* Stop propagation to prevent triggering onClickOutside when clicking the child */}
            <div className="container flex h-full justify-end pt-6">
                <div
                    className="relative h-max max-h-125 w-full overflow-scroll rounded-lg bg-white px-6 pb-6 md:w-95"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="sticky top-0 right-0 left-0 z-50 flex w-full justify-between bg-white py-6 md:py-8">
                        <h6 className="uppercase">Cart ({cartLength})</h6>
                        {cartLength > 0 && (
                            <Button variant="text" onClick={onRemoveAll}>
                                <p className="underline opacity-50">Remove all</p>
                            </Button>
                        )}
                    </div>
                    <div className="flex flex-col gap-y-8">
                        {cartLength > 0 ? (
                            <div className="flex flex-col gap-y-6">
                                {cartItems.map(item => (
                                    <CartItem key={item.id} data={item} />
                                ))}
                            </div>
                        ) : (
                            <div className="mt-4 mb-6 flex items-center justify-center">
                                <h6>Empty Cart</h6>
                            </div>
                        )}

                        {cartLength > 0 && (
                            <>
                                <div className="flex justify-between">
                                    <p className="uppercase opacity-50">Total</p>
                                    <h6>$ {cartTotal}</h6>
                                </div>

                                <Button
                                    variant="contained"
                                    className="-mt-2 w-full uppercase"
                                    onClick={onCheckout}
                                >
                                    Checkout
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
