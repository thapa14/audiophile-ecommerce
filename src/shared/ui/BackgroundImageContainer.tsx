import { useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { useResponsiveImage } from 'shared/lib/hooks';
import { cn } from 'shared/lib/utils';

interface BackgroundImageContainerProps {
    mobile: string;
    tablet: string;
    desktop: string;
    className?: string;
    children?: ReactNode;
    priority?: boolean;
    placeholder?: string;
}

export const BackgroundImageContainer: FC<BackgroundImageContainerProps> = ({
    mobile,
    tablet,
    desktop,
    className,
    children,
    priority = false,
    placeholder,
}) => {
    const { bgImage, isLoading, preloadImages } = useResponsiveImage({ mobile, tablet, desktop });
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (priority) {
            preloadImages();
        }
    }, [priority, preloadImages]);

    useEffect(() => {
        if (bgImage && !isLoading) {
            // Preload the background image
            const img = new Image();
            img.onload = () => setImageLoaded(true);
            img.src = bgImage;
        }
    }, [bgImage, isLoading]);

    return (
        <div className={cn('relative w-full rounded-lg overflow-hidden text-white', className)}>
            {/* Placeholder background */}
            {placeholder && !imageLoaded && (
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
                    style={{ backgroundImage: `url(${placeholder})` }}
                />
            )}
            
            {/* Loading state */}
            {!imageLoaded && !placeholder && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
            
            {/* Main background image */}
            {bgImage && (
                <div
                    className={cn(
                        'absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out',
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                    )}
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
            )}
            
            {/* Content */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};