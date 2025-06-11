import { useCartContext } from 'entities/cart';
import type { FC } from 'react';
import { Button } from 'shared/ui';
import { CartItem } from 'widgets/cart/ui/CartItem';

export const Cart: FC = () => {
    const { cartItems } = useCartContext();
    return (
        <div className="fixed inset-0 top-[90px] z-50 bg-black/50 backdrop-opacity-50">
            {/* Stop propagation to prevent triggering onClickOutside when clicking the child */}
            <div className="container flex h-full w-full justify-end pt-6">
                <div
                    className="relative h-max max-h-125 w-full overflow-scroll rounded-lg bg-white px-6 pb-6"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="sticky top-0 right-0 left-0 z-50 flex w-full justify-between bg-white py-6">
                        <h6 className="uppercase">Cart ({cartItems.length})</h6>
                        <Button variant="text">
                            <p className="underline opacity-50">Remove all</p>
                        </Button>
                    </div>
                    <div className="flex flex-col gap-y-8">
                        <div className="flex flex-col gap-y-6">
                            {cartItems.map(item => (
                                <CartItem key={item.id} data={item} />
                            ))}
                        </div>

                        <div className="flex justify-between">
                            <p className="uppercase opacity-50">Total</p>
                            <h6>$ 5,396</h6>
                        </div>

                        <Button variant="contained" className="-mt-2 w-full uppercase">
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
