import { paymentTypes } from 'pages/checkout/modal/types';
import { addressRegex, alphabetSpaceRegex, emailRegex } from 'shared/lib';
import * as Yup from 'yup';

export const schema = Yup.object().shape({
    name: Yup.string()
        .label('Name')
        .required('Required!')
        .matches(alphabetSpaceRegex, 'Wrong format'),
    email: Yup.string().label('Email').required('Required!').matches(emailRegex, 'Wrong format'),
    phone: Yup.string().label('Phone').required('Required!').matches(emailRegex, 'Wrong format'),
    address: Yup.string()
        .label('Address')
        .required('Required!')
        .matches(addressRegex, 'Wrong format'),
    zipCode: Yup.string()
        .label('Zip Code')
        .required('Required!')
        .matches(emailRegex, 'Wrong format'),
    city: Yup.string()
        .label('City')
        .required('Required!')
        .matches(alphabetSpaceRegex, 'Wrong format'),
    country: Yup.string()
        .label('Country')
        .required('Required!')
        .matches(alphabetSpaceRegex, 'Wrong format'),
    paymentType: Yup.string().label('Payment Type').required('Required!'),
    eMoneyNumber: Yup.string()
        .label('EMoney Number')
        .when('paymentType', {
            is: paymentTypes.eMoney,
            then: schema => schema.required('Required!').matches(emailRegex, 'Wrong format'),
        }),
    eMoneyPin: Yup.string()
        .label('EMoneyPin')
        .when('paymentType', {
            is: paymentTypes.eMoney,
            then: schema => schema.required('Required!').matches(emailRegex, 'Wrong format'),
        }),
});
