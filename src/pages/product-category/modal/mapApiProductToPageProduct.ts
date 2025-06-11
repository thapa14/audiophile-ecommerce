import type { ReadOnlyProduct } from 'entities/product';
import type { ProductPageType } from 'pages/product-category/modal/types';

export const mapApiProductToPageProduct = (data: ReadOnlyProduct[]): ProductPageType[] => {
    return data.map(product => ({
        id: product.id,
        slug: product.slug,
        name: product.name,
        category: product.category,
        categoryImage: product.categoryImage,
        isNew: product.new,
        description: product.description,
    }));
};
