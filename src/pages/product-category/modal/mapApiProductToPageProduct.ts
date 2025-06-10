import type { Product } from 'entities/product';
import type { ProductPageType } from 'pages/product-category/modal/types';

export const mapApiProductToPageProduct = (data: Product[]): ProductPageType[] => {
    return data.map((product: Product) => ({
        id: product.id,
        slug: product.slug,
        name: product.name,
        category: product.category,
        categoryImage: product.categoryImage,
        isNew: product.new,
        description: product.description,
    }));
};
