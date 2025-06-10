import { usePageData } from 'pages/product-category';
import { ProductInfoCard } from 'pages/product-category/ui/ProductInfoCard';
import type { FC } from 'react';
import { ProductCategoryList } from 'widgets/product-category-list';

export const CategoryPage: FC = () => {
    const { pageData, category } = usePageData();
    return (
        <div>
            <div className="flex h-48 w-full items-center justify-center bg-black pt-[90px] text-white sm:h-84">
                <h2 className="text-center text-white uppercase">{category}</h2>
            </div>

            <div className="my-16 flex flex-col gap-y-32 sm:my-30">
                {pageData.map((data, index) => (
                    <ProductInfoCard
                        key={data.id}
                        index={index}
                        id={data.id}
                        image={data.categoryImage}
                        isNew={data.isNew}
                        title={data.name}
                        description={data.description}
                        slug={data.slug}
                    />
                ))}
            </div>
            <div>
                <ProductCategoryList />
            </div>
        </div>
    );
};
