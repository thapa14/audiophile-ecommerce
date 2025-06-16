export const calculateGrandTotal = (cartTotal: number, shipping: number, vat: number): number => {
    return cartTotal + shipping + vat;
};
