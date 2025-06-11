import type { ProductInfoProps } from 'entities/product';
import type { ReactNode } from 'react';
import type { ImageByScreen } from 'shared/type-check';

export type SuggestedProductType = {
    slug: string;
    name: string;
    image: ImageByScreen;
};

export type Product = {
    id: number;
    slug: string;
    name: string;
    image: ImageByScreen;
    category: string;
    categoryImage: ImageByScreen;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: { quantity: number; item: string }[];
    gallery: {
        first: ImageByScreen;
        second: ImageByScreen;
        third: ImageByScreen;
    };
    others: SuggestedProductType[];
};

export type ReadOnlyProduct = Readonly<Product>;

export interface ProductInfoCardProps extends ProductInfoProps {
    id: number;
    image: ImageByScreen;
    index?: number;
    children?: ReactNode;
    slug: string;
}
