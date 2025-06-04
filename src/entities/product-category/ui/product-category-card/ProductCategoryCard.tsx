import type { ProductCategory } from 'entities/product-category/modal';
import { useState, type FC } from 'react';
import { Button } from 'shared/ui';

const ProductCategoryCard: FC<ProductCategory> = ({ title, image, altName, shopNowClick }) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <div
            className="relative flex w-full cursor-pointer flex-col items-center gap-4 py-6 md:gap-4"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="relative z-20 w-1/4 pb-4 md:w-20 md:pb-5 lg:w-1/3">
                <img className="w-full drop-shadow-sm" src={image} alt={altName} />
                <div className="absolute bottom-0 z-0 h-3 w-full rounded-full bg-black opacity-30 blur-md"></div>
            </div>
            <h6 className="z-20 text-[15px] font-bold tracking-[1px] uppercase">{title}</h6>
            <Button
                className={`z-20 uppercase ${isHovered ? 'text-peru' : 'text-gray-500'}`}
                variant="text"
                icon="weui:arrow-filled"
                onClick={shopNowClick}
            >
                Shop
            </Button>
            <div className="bg-whitesmoke absolute right-0 bottom-0 left-0 z-10 h-40 w-full rounded-lg md:h-40 lg:h-[200px]"></div>
        </div>
    );
};

export { ProductCategoryCard };
