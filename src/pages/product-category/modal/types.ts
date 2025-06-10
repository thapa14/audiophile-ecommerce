import type { ImageByScreen } from 'shared/type-check';

export interface ProductPageType {
    id: number;
    slug: string;
    name: string;
    category: string;
    categoryImage: ImageByScreen;
    isNew: boolean;
    description: string;
}

export interface CategoryPageProps {
    pageData: ProductPageType[];
    category: string;
}
