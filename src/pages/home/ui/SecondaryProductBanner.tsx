import desktop from 'shared/assets/home/desktop/image-speaker-zx7.jpg';
import mobile from 'shared/assets/home/mobile/image-speaker-zx7.jpg';
import tablet from 'shared/assets/home/tablet/image-speaker-zx7.jpg';
import { useResponsiveImage } from 'shared/lib/hooks';
import { Button } from 'shared/ui';

const SecondaryProductBanner = () => {
    const { bgImage } = useResponsiveImage({ mobile, tablet, desktop });

    return (
        <div
            className="relative container h-80 rounded-lg bg-cover text-white"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="z-30 flex h-full w-full items-center justify-start p-6">
                <div className="flex flex-col items-start text-white lg:items-start">
                    <h4 className="mb-8 text-black">ZX7 SPEAKER</h4>
                    <Button variant="outlined" className="uppercase">
                        See product
                    </Button>
                </div>
            </div>
        </div>
    );
};

export { SecondaryProductBanner };
