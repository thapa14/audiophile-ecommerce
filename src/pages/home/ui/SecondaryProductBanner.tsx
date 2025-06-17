import { SeeProductButton } from 'features/view-product';
import desktop from '/assets/home/desktop/image-speaker-zx7.jpg';
import mobile from '/assets/home/mobile/image-speaker-zx7.jpg';
import tablet from '/assets/home/tablet/image-speaker-zx7.jpg';
import { useResponsiveImage } from 'shared/lib/hooks';

const SecondaryProductBanner = () => {
    const { bgImage } = useResponsiveImage({ mobile, tablet, desktop });

    return (
        <div
            className="relative container h-80 rounded-lg bg-cover text-white"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="z-30 flex h-full w-full items-center justify-start p-6 lg:pl-24">
                <div className="flex flex-col items-start gap-y-8 text-white lg:items-start">
                    <h4 className="text-black">ZX7 SPEAKER</h4>
                    <SeeProductButton
                        variant="outlined"
                        className="uppercase"
                        slug="ZX7 Speaker"
                        pId={5}
                    />
                </div>
            </div>
        </div>
    );
};

export { SecondaryProductBanner };
