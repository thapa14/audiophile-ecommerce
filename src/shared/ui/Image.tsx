import type { FC } from 'react';
import { useResponsiveImage } from 'shared/lib/hooks';
import type { ImageByScreen } from 'shared/type-check';

interface ImageProps {
    image: ImageByScreen;
    alt: string;
    className?: string;
}

export const Image: FC<ImageProps> = ({ image, alt, className }) => {
    const { bgImage } = useResponsiveImage(image);
    return <img src={bgImage} alt={alt} className={className} />;
};
