import type { ProductInfoProps } from 'entities/product';
import type { ImageByScreen } from 'shared/type-check';

export type ProductDetailsHeadProps = ProductInfoProps & {
    image: ImageByScreen;
    id: number;
    price: number;
};
