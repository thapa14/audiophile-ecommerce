import clsx from 'clsx';
import { ProductInfo, type ProductInfoCardProps } from 'entities/product';
import { SeeProductButton } from 'features/view-product';
import type { FC } from 'react';
import { useResponsiveImage } from 'shared/lib/hooks';

export const ProductInfoCard: FC<ProductInfoCardProps> = ({
    id,
    image,
    title,
    isNew,
    description,
    index,
    slug,
}) => {
    const { bgImage } = useResponsiveImage(image);

    return (
        <div
            className={clsx(
                'container flex flex-col items-center gap-y-8 sm:gap-y-[52px] lg:flex-row lg:gap-x-20',
                (index ?? 0) % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            )}
        >
            <div className="w-full grow-0 rounded-lg lg:w-1/2">
                {bgImage && (
                    <img
                        src={bgImage}
                        alt="XX99 Mark II Headphones"
                        className="w-full rounded-lg"
                    />
                )}
            </div>

            <div className="flex grow-0 flex-col items-center gap-y-6 sm:w-[572px] lg:w-1/2 lg:items-start">
                <ProductInfo
                    isNew={isNew}
                    title={title}
                    description={description}
                    className="lg:text-start"
                />
                <SeeProductButton
                    variant="contained"
                    className="text-[13px] tracking-[1px] uppercase"
                    slug={slug}
                    pId={id}
                />
            </div>
        </div>
    );
};
