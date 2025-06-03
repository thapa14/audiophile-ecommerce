import { Hero } from 'pages/home/ui/Hero';
import type { FC } from 'react';
import { ProductCategoryList } from 'widgets/product-category-list/ui/ProductCategoryList';

const Home: FC = () => {
    return (
        <div>
            <Hero />
            <ProductCategoryList />
        </div>
    );
};

export default Home;
