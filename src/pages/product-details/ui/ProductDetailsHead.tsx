import { ProductInfo } from 'entities/product';
import { AddToCart } from 'features/add-to-cart';
import type { ProductDetailsHeadProps } from 'pages/product-details/ui/ProductDetailsHead.types';
import type { FC } from 'react';
import { useResponsiveImage } from 'shared/lib/hooks';

export const ProductDetailsHead: FC<ProductDetailsHeadProps> = ({
    id,
    image,
    title,
    isNew,
    description,
    price,
}) => {
    const { bgImage } = useResponsiveImage(image);
    return (
        <div className="container flex flex-col items-center gap-y-8 md:flex-row">
            <div className="w-full grow-0 rounded-lg md:w-1/2 md:pr-18">
                {bgImage && (
                    <img
                        src={bgImage}
                        alt="XX99 Mark II Headphones"
                        className="w-full rounded-lg"
                    />
                )}
            </div>

            <div className="flex grow-0 flex-col items-start gap-y-6 md:w-1/2 lg:items-start">
                <ProductInfo
                    isNew={isNew}
                    title={title}
                    description={description}
                    className="text-start"
                />
                <div className="flex flex-col gap-y-8 lg:gap-y-12">
                    <h6>$ {price}</h6>
                    <AddToCart pId={id} price={price} />
                </div>
            </div>
        </div>
    );
};
