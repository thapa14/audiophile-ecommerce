import clsx from 'clsx';
import type { FC } from 'react';
import { useResponsiveImage } from 'shared/lib/hooks';

interface BackgroundImageContainerProps {
    mobile: string;
    tablet: string;
    desktop: string;
    className?: string;
}

export const BackgroundImageContainer: FC<BackgroundImageContainerProps> = ({
    mobile,
    tablet,
    desktop,
    className,
}) => {
    const { bgImage } = useResponsiveImage({ mobile, tablet, desktop });

    return (
        <div
            className={clsx('w-full rounded-lg bg-cover text-white', className)}
            style={{ backgroundImage: `url(${bgImage})` }}
        />
    );
};
