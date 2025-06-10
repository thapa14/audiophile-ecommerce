import type { Product } from 'entities/product';
import data from 'shared/data.json';

export function fetchMockProductDetails(
    productId: string | null,
    slug: string | null
): Promise<Product> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productData = data.find(
                (product: Product) => product.id === Number(productId) || product.slug === slug
            );
            if (productData) {
                resolve(productData);
            } else {
                reject('Product not found.');
            }
        }, 500);
    });
}
