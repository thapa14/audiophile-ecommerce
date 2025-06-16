import { getCartTotal, useCartContext } from 'entities/cart';
import { calculateGrandTotal } from 'entities/cart/lib/calculateGrandTotal';
import { calculateVat } from 'entities/cart/lib/calculateVat';
import { BillingForm, PaymentForm, ShippingForm } from 'features/checkout';
import { defaultValues } from 'pages/checkout/modal/defaults';
import { schema } from 'pages/checkout/modal/schema-validation';
import type { FormTypes } from 'pages/checkout/modal/types';
import { CartItem } from 'pages/checkout/ui/CartItem';
import type { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Button } from 'shared/ui';
import { yupResolver } from '@hookform/resolvers/yup';

export const Checkout: FC = () => {
    const navigate = useNavigate();
    const { cartItems } = useCartContext();
    const methods = useForm<FormTypes>({
        defaultValues: defaultValues,
        resolver: yupResolver(schema),
    });
    const cartTotal = getCartTotal(cartItems);
    const vat = calculateVat(cartTotal);
    const grandTotal = calculateGrandTotal(cartTotal, 50, vat);

    return (
        <div className="container pt-[90px]">
            <div className="mt-4 mb-6 flex justify-start md:mt-20 md:mb-14">
                <Button
                    variant="text"
                    onClick={() => {
                        navigate(-1);
                    }}
                    className="opacity-50"
                >
                    Go Back
                </Button>
            </div>
            <FormProvider {...methods}>
                <div className="grid grid-cols-1 items-start gap-y-8 lg:grid-cols-12 lg:gap-x-6">
                    <div className="bg-whitesmoke rounded-lg p-6 lg:col-span-8">
                        <h3 className="mb-8 uppercase">Checkout</h3>

                        <form
                            onSubmit={methods.handleSubmit(
                                data => console.log(data),
                                error => console.log(error)
                            )}
                        >
                            <div className="flex flex-col gap-y-8">
                                <BillingForm />
                                <ShippingForm />
                                <PaymentForm />
                            </div>
                        </form>
                    </div>

                    <div className="bg-whitesmoke flex flex-col items-start gap-y-8 rounded-lg p-6 lg:col-span-4">
                        <h6 className="uppercase">Summary</h6>
                        <div className="flex flex-col gap-y-6">
                            {cartItems.map(item => (
                                <CartItem key={item.id} data={item} />
                            ))}
                        </div>
                        <div className="flex w-full flex-col gap-y-2">
                            <div className="flex justify-between">
                                <p className="uppercase opacity-50">Total</p>
                                <h6>$ {cartTotal}</h6>
                            </div>
                            <div className="flex justify-between">
                                <p className="uppercase opacity-50">Shipping</p>
                                <h6>$ 50</h6>
                            </div>
                            <div className="flex justify-between">
                                <p className="uppercase opacity-50">VAT (INCLUDED)</p>
                                <h6>$ {vat}</h6>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <p className="uppercase opacity-50">Grand Total</p>
                                <h6 className="text-peru">$ {grandTotal}</h6>
                            </div>
                        </div>
                        <Button variant="contained" className="w-full uppercase" type="submit">
                            Continue & pay
                        </Button>
                    </div>
                </div>
            </FormProvider>
        </div>
    );
};
