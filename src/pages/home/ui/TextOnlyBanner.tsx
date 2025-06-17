import { SeeProductButton } from 'features/view-product';
import type { FC } from 'react';

export const TextOnlyBanner: FC = () => {
    return (
        <div className="bg-whitesmoke h-50 w-full rounded-lg md:h-80">
            <div className="flex h-full max-w-[328px] flex-col items-start py-8 pl-6 text-white sm:max-w-[380px] md:justify-center md:pl-10 lg:w-[400px] lg:items-start lg:pl-24">
                <h4 className="mb-8 text-black">YX1 EARPHONES</h4>
                <SeeProductButton variant="outlined" pId={1} slug="yx1-earphones" />
            </div>
        </div>
    );
};
