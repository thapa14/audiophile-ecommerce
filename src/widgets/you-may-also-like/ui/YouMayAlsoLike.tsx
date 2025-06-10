import { SeeProductButton } from 'features/view-product';
import type { FC } from 'react';
import { Image } from 'shared/ui/Image';
import type { YouMayAlsoLikeProps } from 'widgets/you-may-also-like/modal/type';

export const YouMayAlsoLike: FC<YouMayAlsoLikeProps> = ({ suggestedProduct }) => {
    return (
        <div className="container flex flex-col items-center gap-10">
            <h6 className="uppercase">You may also like</h6>
            <div className="flex w-full flex-col flex-nowrap gap-y-14 md:flex-row md:gap-x-2.5 lg:gap-x-8">
                {suggestedProduct.map((product, index) => (
                    <div key={index} className="flex flex-col items-center gap-y-8">
                        <Image key={index} image={product.image} alt={product.name} className="" />
                        <h5 className="uppercase">{product.name}</h5>
                        <SeeProductButton slug={product.slug} className="uppercase" />
                    </div>
                ))}
            </div>
        </div>
    );
};
