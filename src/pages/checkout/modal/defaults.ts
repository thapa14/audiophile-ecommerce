import { paymentTypes } from 'pages/checkout/modal/types';

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
