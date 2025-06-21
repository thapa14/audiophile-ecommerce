import { useCartContext } from 'entities/cart';
import { CartItem } from 'pages/checkout/ui/CartItem';
import { type FC, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'shared/ui';

export const ConfirmationDialog: FC<{ grandTotal: string | number; closeModal: () => void }> = ({
    grandTotal,
    closeModal,
}) => {
    const navigate = useNavigate();
    const { cartItems, onResetAll } = useCartContext();
    const cartLength = cartItems.length;
    const backToHomeHandler = useCallback(() => {
        closeModal();
        navigate('/', { replace: true });
        onResetAll();
    }, [closeModal, navigate, onResetAll]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-opacity-50">
            <div className="container flex flex-col gap-y-6 rounded-lg bg-white p-8 md:w-[540px] md:p-12">
                <div className="flex flex-col gap-y-6">
                    <div>
                        <img src="/assets/checkout/icon-order-confirmation.svg" alt="logo" />
                    </div>
                    <h3 className="w-70">THANK YOU FOR YOUR ORDER</h3>
                    <p className="-mt-2 opacity-50">
                        You will receive an email confirmation shortly.
                    </p>
                </div>
                <div className="bg-whitesmoke flex w-full flex-col rounded-lg md:flex-row">
                    <div className="rounded-t-lg rounded-l-lg p-6 md:w-1/2">
                        <div className="border-stroke border-b-1 pb-3">
                            <CartItem data={cartItems[0]} />
                        </div>
                        {cartLength > 1 && (
                            <p className="sub-title mt-3 text-center text-xs opacity-50">
                                and {cartLength - 1} other item(s)
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col justify-center gap-y-2 rounded-b-lg bg-black px-6 py-4 md:w-1/2 md:rounded-r-lg md:rounded-bl-none">
                        <p className="text-white opacity-50">GRAND TOTAL</p>
                        <h6 className="text-white">$ {grandTotal}</h6>
                    </div>
                </div>
                <Button className="w-full uppercase" onClick={backToHomeHandler}>
                    Back to Home
                </Button>
            </div>
        </div>
    );
};
