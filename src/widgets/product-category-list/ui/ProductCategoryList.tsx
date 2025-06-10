import type { FC } from 'react';
import { useNavigate } from 'react-router';
import headphone from 'shared/assets/home/mobile/product-headphone-preview.svg';
import speaker from 'shared/assets/home/mobile/product-speaker-preview.svg';
import earphone from 'shared/assets/home/mobile/product-earphone-preview.svg';
import { CategoryCard } from 'widgets/product-category-list';

const ProductCategoryList: FC = () => {
    const navigate = useNavigate();

    return (
        <div className="container flex w-full flex-col flex-nowrap gap-y-6 md:flex-row md:gap-x-2.5 lg:gap-x-8">
            <CategoryCard
                title="Headphones"
                image={headphone}
                altName="Headphones"
                shopNowClick={() => {
                    navigate('/headphones');
                }}
            />
            <CategoryCard
                title="Speakers"
                image={speaker}
                altName="Speakers"
                shopNowClick={() => {
                    navigate('/speakers');
                }}
            />
            <CategoryCard
                title="Earphones"
                image={earphone}
                altName="Earphones"
                shopNowClick={() => {
                    navigate('/earphones');
                }}
            />
        </div>
    );
};

export { ProductCategoryList };
