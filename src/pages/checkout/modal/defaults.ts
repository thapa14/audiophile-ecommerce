import { paymentTypes } from 'features/checkout';

export const defaultValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    paymentType: paymentTypes.cod,
    eMoneyNumber: '',
    eMoneyPin: '',
};
