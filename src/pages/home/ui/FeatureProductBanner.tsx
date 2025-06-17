import { useNavigateToProductDetails } from 'features/view-product';
import { type FC } from 'react';
import desktop from '/assets/home/desktop/image-speaker-zx9.png';
import backgroundImage from '/assets/home/desktop/pattern-circles.svg';
import mobile from '/assets/home/mobile/image-speaker-zx9.png';
import tablet from '/assets/home/tablet/image-speaker-zx9.png';
import { useResponsiveImage } from 'shared/lib/hooks';
import { DynamicInfoBlock } from 'shared/ui';

const FeatureProductBanner: FC = () => {
    const { bgImage: speaker } = useResponsiveImage({ mobile, tablet, desktop });
    const navigateToProductDetails = useNavigateToProductDetails();

    return (
        <div className="bg-peru relative container h-[600px] overflow-hidden rounded-lg text-white md:h-[720px] lg:h-[560px]">
            <div className="lg z-30 flex w-full flex-col items-center gap-y-8 pt-14 lg:ml-[90px] lg:h-full lg:flex-row lg:items-end lg:gap-10 lg:pt-0 2xl:ml-[118px] 2xl:gap-x-[138px]">
                {speaker && (
                    <img
                        src={speaker}
                        alt="ZX9 SPEAKER"
                        className="z-30 w-44 lg:-mb-8 lg:w-[410px]"
                    />
                )}

                <DynamicInfoBlock className="z-30 p-6 md:max-w-[348px] lg:mt-32 lg:self-start lg:p-0">
                    <DynamicInfoBlock.Title className="mx-6 lg:mx-0">
                        ZX9 SPEAKER
                    </DynamicInfoBlock.Title>
                    <DynamicInfoBlock.Description className="font-medium">
                        Upgrade to premium speakers that are phenomenally built to deliver truly
                        remarkable sound.
                    </DynamicInfoBlock.Description>
                    <DynamicInfoBlock.Button
                        variant="contained"
                        className="hover:!bg-quartz !bg-black !text-white"
                        onClick={() => {
                            navigateToProductDetails({
                                pathname: '/product-details',
                                search: '?slug=zx9-speaker',
                            });
                        }}
                    >
                        See product
                    </DynamicInfoBlock.Button>
                </DynamicInfoBlock>
            </div>

            <img
                src={backgroundImage}
                alt="background image"
                className="absolute bottom-[156px] z-20 h-[558px] w-[558px] object-cover md:bottom-16 md:h-[944px] md:w-[944px] lg:-bottom-[348px] lg:-left-[149px]"
            />
        </div>
    );
};

export { FeatureProductBanner };
