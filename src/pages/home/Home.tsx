import { FeatureProductBanner, Hero, SecondaryProductBanner, TextOnlyBanner } from 'pages/home/ui';
import type { FC } from 'react';
import desktop from 'shared/assets/home/desktop/image-earphones-yx1.jpg';
import mobile from 'shared/assets/home/mobile/image-earphones-yx1.jpg';
import tablet from 'shared/assets/home/tablet/image-earphones-yx1.jpg';
import { BackgroundImageContainer } from 'shared/ui';
import { ProductCategoryList } from 'widgets/product-category-list';

const Home: FC = () => {
    return (
        <div>
            <Hero />
            <ProductCategoryList />
            <div className="flex flex-col gap-6">
                <FeatureProductBanner />
                <SecondaryProductBanner />
                <div className="container flex flex-col gap-6">
                    <BackgroundImageContainer
                        mobile={mobile}
                        tablet={tablet}
                        desktop={desktop}
                        className="h-50 rounded-lg"
                    />
                    <TextOnlyBanner />
                </div>
            </div>
        </div>
    );
};

export { Home };
