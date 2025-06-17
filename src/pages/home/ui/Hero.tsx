import { SeeProductButton } from 'features/view-product';
import type { FC } from 'react';
import desktop from '/assets/home/desktop/image-hero.jpg';
import mobile from '/assets/home/mobile/image-hero.jpg';
import tablet from '/assets/home/tablet/image-hero.jpg';
import { useResponsiveImage } from 'shared/lib/hooks';
import { DynamicInfoBlock } from 'shared/ui/DynamicInfoBlock';

export const Hero: FC = () => {
    const { bgImage } = useResponsiveImage({
        mobile,
        desktop,
        tablet,
    });

    return (
        <div
            className="h-[600px] w-full bg-cover bg-center pt-[90px] sm:h-[729px]"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="z-10 container flex h-full w-full items-center justify-center lg:justify-start">
                <DynamicInfoBlock>
                    <DynamicInfoBlock.Feature>NEW PRODUCT</DynamicInfoBlock.Feature>
                    <DynamicInfoBlock.Title>XX99 Mark II Headphones</DynamicInfoBlock.Title>
                    <DynamicInfoBlock.Description>
                        Experience natural, lifelike audio and exceptional build quality made for
                        the passionate music enthusiast.
                    </DynamicInfoBlock.Description>
                    <SeeProductButton slug="xx99-mark-two-headphones" className="uppercase" />
                </DynamicInfoBlock>
            </div>
        </div>
    );
};
