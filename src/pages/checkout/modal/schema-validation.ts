import * as Yup from 'yup';

export const schema = Yup.object().shape({
    name: Yup.string().label('Name').required(),
    email: Yup.string().label('Email').required(),
    phone: Yup.string().label('Phone').required(),
    address: Yup.string().label('Address').required(),
    zipCode: Yup.string().label('Zip Code').required(),
    city: Yup.string().label('City').required(),
    country: Yup.string().label('Country').required(),
    paymentType: Yup.string().label('Payment Type').required(),
    eMoneyNumber: Yup.string().label('EMoney Number').required(),
    eMoneyPin: Yup.string().label('EMoneyPin').required(),
});
