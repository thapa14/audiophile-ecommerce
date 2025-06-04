import type { FC } from 'react';
import desktopCallout from 'shared/assets/shared/desktop/image-best-gear.jpg';
import mobileCallout from 'shared/assets/shared/mobile/image-best-gear.jpg';
import tabletCallout from 'shared/assets/shared/tablet/image-best-gear.jpg';
import { useResponsiveImage } from 'shared/lib/hooks';

export const GlobalCalloutSection: FC = () => {
    const { bgImage } = useResponsiveImage({
        mobile: mobileCallout,
        tablet: tabletCallout,
        desktop: desktopCallout,
    });
    return (
        <div className="container !my-30">
            <div className="flex w-full flex-col gap-10 sm:gap-16 lg:flex-row-reverse lg:gap-24 xl:gap-32">
                <img src={bgImage} alt="callout image" className="rounded-lg lg:w-1/2" />
                <div className="flex flex-col gap-8 md:px-16 lg:w-1/2 lg:items-start lg:justify-center lg:px-0">
                    <h2 className="text-center uppercase lg:text-start">
                        Bringing you the <span className="text-peru">best</span> audio gear
                    </h2>
                    <p className="text-center opacity-50 lg:text-start">
                        Located at the heart of New York City, Audiophile is the premier store for
                        high end headphones, earphones, speakers, and audio accessories. We have a
                        large showroom and luxury demonstration rooms available for you to browse
                        and experience a wide range of our products. Stop by our store to meet some
                        of the fantastic people who make Audiophile the best place to buy your
                        portable audio equipment.
                    </p>
                </div>
            </div>
        </div>
    );
};
