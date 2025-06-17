import type { FC } from 'react';
import { useNavigate } from 'react-router';
import earphone from '/assets/home/mobile/product-earphone-preview.svg';
import headphone from '/assets/home/mobile/product-headphone-preview.svg';
import speaker from '/assets/home/mobile/product-speaker-preview.svg';
import { CategoryCard } from 'features/product-category-list';
import type { ProductCategoryListProps } from 'features/product-category-list/ui/ProductCategoryList.types';

const ProductCategoryList: FC<ProductCategoryListProps> = ({ toggleMenu }) => {
    const navigate = useNavigate();

    return (
        <div className="container flex flex-col flex-nowrap gap-y-6 md:flex-row md:gap-x-2.5 lg:gap-x-8">
            <CategoryCard
                title="Headphones"
                image={headphone}
                altName="Headphones"
                shopNowClick={() => {
                    navigate('/headphones');
                    if (typeof toggleMenu === 'function') toggleMenu();
                }}
            />
            <CategoryCard
                title="Speakers"
                image={speaker}
                altName="Speakers"
                shopNowClick={() => {
                    navigate('/speakers');
                    if (typeof toggleMenu === 'function') toggleMenu();
                }}
            />
            <CategoryCard
                title="Earphones"
                image={earphone}
                altName="Earphones"
                shopNowClick={() => {
                    navigate('/earphones');
                    if (typeof toggleMenu === 'function') toggleMenu();
                }}
            />
        </div>
    );
};

export { ProductCategoryList };
