import useHero from 'pages/home/modal/useHero';
import type { FC } from 'react';
import { Button } from 'shared/ui';

export const Hero: FC = () => {
    const { bgImage } = useHero();

    return (
        <div
            className="h-[600px] w-full bg-cover bg-center pt-[90px] sm:h-[729px]"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="z-10 container flex h-full w-full items-center justify-center lg:justify-start">
                <div className="flex max-w-[328px] flex-col items-center gap-8 text-white sm:max-w-[380px] sm:gap-6 lg:w-[400px] lg:items-start">
                    <p className="overline opacity-50">NEW PRODUCT</p>
                    <h2 className="text-center lg:text-start">XX99 Mark II HeadphoneS</h2>
                    <p className="text-center opacity-75 sm:px-4 lg:px-0 lg:text-start">
                        Experience natural, lifelike audio and exceptional build quality made for
                        the passionate music enthusiast.
                    </p>
                    <Button variant="contained" className="uppercase lg:mt-2">
                        See product
                    </Button>
                </div>
            </div>
        </div>
    );
};
