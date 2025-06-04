import type { FC } from 'react';
import { Button } from 'shared/ui';

export const TextOnlyBanner: FC = () => {
    return (
        <div className="bg-whitesmoke h-50 w-full rounded-lg">
            <div className="flex h-full max-w-[328px] flex-col items-start py-8 pl-6 text-white sm:max-w-[380px] lg:w-[400px] lg:items-start">
                <h4 className="mb-8 text-black">YX1 EARPHONES</h4>
                <Button variant="outlined" className="">
                    YX1 EARPHONES
                </Button>
            </div>
        </div>
    );
};
