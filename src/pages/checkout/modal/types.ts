export enum paymentTypes {
    eMoney = 'e-Money',
    cod = 'Cash on Delivery',
}
export type FormTypes = {
    name: string;
    email: string;
    phone: string;
    address: string;
    zipCode: string;
    city: string;
    country: string;
    paymentType: paymentTypes;
    eMoneyNumber: string;
    eMoneyPin: string;
};
