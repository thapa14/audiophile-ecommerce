import type { ReadOnlyProduct } from 'entities/product';
import data from 'shared/data.json';

export function fetchMockProductDetails(
    productId: string | null,
    slug: string | null
): Promise<ReadOnlyProduct> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productData = data.find(
                product => product.id === Number(productId) || product.slug === slug
            );
            if (productData) {
                resolve(productData);
            } else {
                reject('Product not found.');
            }
        }, 500);
    });
}
