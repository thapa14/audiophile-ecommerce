import { useProductDetails } from 'pages/product-details/modal/useProductDetails';
import { ProductDetailsHead } from 'pages/product-details/ui/ProductDetailsHead';
import type { FC } from 'react';
import { Button } from 'shared/ui';
import { Image } from 'shared/ui/Image';
import { ProductCategoryList } from 'features/product-category-list';
import { ProductDetailsSkeleton } from 'shared/ui/ProductDetailsSkeleton';
import { YouMayAlsoLike } from 'widgets/you-may-also-like';

export const ProductDetails: FC = () => {
    const { productData, loading, onBackClick } = useProductDetails();

    if (loading) {
        return <ProductDetailsSkeleton />;
    }

    if (!productData) {
        return (
            <div>
                <h1>No Data found</h1>
            </div>
        );
    }

    return (
        <div className="container pt-[90px]">
            <div className="mt-4 mb-6 flex justify-start md:mt-20 md:mb-14">
                <Button variant="text" onClick={onBackClick}>
                    Go Back
                </Button>
            </div>
            <ProductDetailsHead
                id={productData.id}
                image={productData.image}
                isNew={productData.new}
                title={productData.name}
                description={productData.description}
                price={productData.price}
            />
            <div>
                <div className="my-22 flex flex-col gap-y-28 md:my-30">
                    <div className="flex flex-col items-start gap-y-6">
                        <h3>FEATURES</h3>
                        <p className="opacity-50">{productData.features}</p>
                    </div>
                    <div className="flex flex-col items-start gap-y-6">
                        <h3 className="uppercase">In the box</h3>
                        <div className="flex flex-col gap-y-2">
                            {productData.includes.map((item, index) => (
                                <div className="flex gap-x-5" key={index}>
                                    <p className="text-peru font-bold">{item.quantity}X</p>
                                    <p className="font-medium text-black opacity-50">{item.item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-[18px] lg:gap-x-6 xl:gap-x-7.5">
                    <div className="flex w-full flex-col gap-y-5 md:w-[277px] md:gap-y-6 lg:w-[374px] xl:w-[445px] xl:gap-y-8">
                        <Image
                            image={productData.gallery.first}
                            alt="first"
                            className="rounded-lg"
                        />
                        <Image
                            image={productData.gallery.second}
                            alt="second"
                            className="rounded-lg"
                        />
                    </div>

                    <div className="w-full md:w-[395px] lg:w-[533px] xl:w-[635px]">
                        <Image
                            image={productData.gallery.third}
                            alt="third"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <div className="my-30">
                <YouMayAlsoLike suggestedProduct={productData.others} />
            </div>
            <div className="mt-30">
                <ProductCategoryList />
            </div>
        </div>
    );
};
