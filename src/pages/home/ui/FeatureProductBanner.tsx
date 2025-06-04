import type { FC } from 'react';
import mobileSpeaker from 'shared/assets/home/mobile/image-speaker-zx9.png';
import backgroundImage from 'shared/assets/home/desktop/pattern-circles.svg';
import { DynamicInfoBlock } from 'shared/ui';

const FeatureProductBanner: FC = () => {
    return (
        <div className="bg-peru relative container h-[600px] overflow-hidden rounded-lg text-white">
            <div className="z-30 flex w-full flex-col items-center gap-8 pt-14">
                <img src={mobileSpeaker} alt="ZX9 SPEAKER" className="w-44" />

                <DynamicInfoBlock className="p-6">
                    <DynamicInfoBlock.Title className="mx-6">ZX9 SPEAKER</DynamicInfoBlock.Title>
                    <DynamicInfoBlock.Description>
                        Upgrade to premium speakers that are phenomenally built to deliver truly
                        remarkable sound.
                    </DynamicInfoBlock.Description>
                    <DynamicInfoBlock.Button
                        variant="contained"
                        className="hover:!bg-quartz !bg-black !text-white"
                    >
                        See product
                    </DynamicInfoBlock.Button>
                </DynamicInfoBlock>
            </div>

            <img
                src={backgroundImage}
                alt="background image"
                className="absolute bottom-[156px] z-20 h-[558px] w-[558px] object-cover"
            />
        </div>
    );
};

export { FeatureProductBanner };
