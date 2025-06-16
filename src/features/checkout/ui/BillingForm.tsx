import type { FC } from 'react';
import { Input } from 'shared/ui/atoms/Input';

export const BillingForm: FC = () => {
    return (
        <div className="flex flex-col gap-y-6">
            <p className="sub-title text-peru uppercase">Billing Details</p>

            <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-4">
                <Input name="name" label="Name" placeholder="Pankaj" />
                <Input name="email" label="Email Address" placeholder="pankajthapa010@gmail.com" />
                <Input name="phone" label="Phone Number" placeholder="+91 897-937-4476" />
            </div>
        </div>
    );
};
