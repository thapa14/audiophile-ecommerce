import type { FC } from 'react';
import { Input } from 'shared/ui/atoms';

export const ShippingForm: FC = () => {
    return (
        <div className="flex flex-col gap-y-6">
            <p className="sub-title text-peru uppercase">Shipping Details</p>

            <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-4">
                <Input
                    name="address"
                    label="Your Address"
                    placeholder="sector 44, Noida"
                    wrapperClass="md:col-span-2"
                />
                <Input name="zipCode" label="Zip Code" placeholder="201301" />
                <Input name="city" label="City" placeholder="Noida" />
                <Input
                    name="country"
                    label="Country"
                    placeholder="India"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
            </div>
        </div>
    );
};
