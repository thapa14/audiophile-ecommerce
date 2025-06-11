import type { CartItemsType } from 'entities/cart/modal/types';

export const changeProductQuantity = (
    allProducts: CartItemsType[],
    productId: number,
    operation: 'INCREMENT' | 'DECREMENT'
) => {
    const tempProducts = [...allProducts];
    const selectedProductIndex = allProducts.findIndex(product => product.id === productId);
    if (selectedProductIndex > 0) {
        if (operation === 'INCREMENT') {
            tempProducts[selectedProductIndex].quantity += 1;
        } else {
            tempProducts[selectedProductIndex].quantity -= 1;
        }
    }
    return tempProducts;
};
