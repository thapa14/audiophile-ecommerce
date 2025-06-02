import type { FC } from 'react';
import heroBackground from 'shared/assets/home/mobile/image-header.jpg';
import Button from 'shared/ui/atoms/Button';

export const Hero: FC = () => {
    return (
        <div
            className="flex h-[600px] w-full items-center justify-center bg-cover bg-center pt-[90px]"
            style={{ backgroundImage: `url(${heroBackground})` }}
        >
            <div className="z-10 container flex flex-col items-center gap-8 text-white">
                <p className="overline">NEW PRODUCT</p>
                <h2 className="text-center">XX99 Mark II HeadphoneS</h2>
                <p className="text-center">
                    Experience natural, lifelike audio and exceptional build quality made for the
                    passionate music enthusiast.
                </p>
                <Button variant="contained" className="uppercase">
                    See product
                </Button>
            </div>
        </div>
    );
};
