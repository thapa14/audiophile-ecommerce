import clsx from 'clsx';
import type { ProductInfoProps } from 'entities/product/ui/ProductInfo.types';
import type { FC } from 'react';

export const ProductInfo: FC<ProductInfoProps> = ({ title, description, isNew, className }) => {
    return (
        <div className={clsx('flex w-full flex-col gap-y-6 text-center sm:gap-y-4', className)}>
            {isNew && <p className={clsx('text-peru overline')}>NEW PRODUCT</p>}
            <h2 className={clsx('uppercase sm:mb-4')}>{title}</h2>
            <p className="font-normal opacity-50 sm:mb-2">{description}</p>
        </div>
    );
};
