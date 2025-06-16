import { paymentTypes } from 'pages/checkout/modal/types';
import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from 'shared/ui/atoms';
import { Radio } from 'shared/ui/atoms/Radio';

export const PaymentForm: FC = () => {
    const { watch } = useFormContext();
    const paymentType = watch('paymentType');
    const paymentOptions = Object.values(paymentTypes);

    return (
        <div className="flex flex-col gap-y-6">
            <p className="sub-title text-peru uppercase">Payment Details</p>

            <div className="grid grid-cols-1 gap-y-6">
                <Radio name="paymentType" options={paymentOptions} label="Payment Method" />
                {paymentType === 'e-Money' && (
                    <div className="mt-2">
                        <Input name="eMoneyNumber" label="e-Money Number" />
                        <Input name="eMoneyPin" label="e-Money Pin" />
                    </div>
                )}
            </div>
        </div>
    );
};
