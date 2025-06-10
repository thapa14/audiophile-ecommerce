import type { ProductPageType } from 'pages/product-category';

export interface UsePageDataResult {
    pageData: ProductPageType[];
    error: Error | null;
    category: string;
}
