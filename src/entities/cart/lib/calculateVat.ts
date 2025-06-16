export const calculateVat = (cartTotal: number): number => {
    return (cartTotal * 20) / 100;
};
