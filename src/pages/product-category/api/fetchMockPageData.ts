import type { Product } from 'entities/product';
import data from 'shared/data.json';

export function fetchMockPageData(category: string): Promise<Product[]> {
    return new Promise<Product[]>((resolve, reject) => {
        setTimeout(() => {
            const filteredData = data.filter((product: Product) => {
                return product.category === category;
            });
            if (filteredData.length > 0) {
                resolve(filteredData);
            } else {
                reject('Page Not Found');
            }
        }, 500);
    });
}
