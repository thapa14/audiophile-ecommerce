import { ProductCategoryCard } from 'entities/product-category/ui';
import type { FC } from 'react';
import headphone from 'shared/assets/home/mobile/product-headphone-preview.svg';

const ProductCategoryList: FC = () => {
    return (
        <div className="container flex w-full flex-col flex-nowrap gap-x-2.5 pb-8 md:flex-row">
            <ProductCategoryCard
                title="Headphone"
                image={headphone}
                altName="Headphone"
                shopNowClick={() => {}}
            />
            <ProductCategoryCard
                title="Headphone"
                image={headphone}
                altName="Headphone"
                shopNowClick={() => {}}
            />
            <ProductCategoryCard
                title="Headphone"
                image={headphone}
                altName="Headphone"
                shopNowClick={() => {}}
            />
        </div>
    );
};

export { ProductCategoryList };
