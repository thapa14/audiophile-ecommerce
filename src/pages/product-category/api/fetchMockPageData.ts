import type { ReadOnlyProduct } from 'entities/product';
import data from 'shared/data.json';

export function fetchMockPageData(category: string): Promise<ReadOnlyProduct[]> {
    return new Promise<ReadOnlyProduct[]>((resolve, reject) => {
        setTimeout(() => {
            const filteredData = data.filter((product: ReadOnlyProduct) => {
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
