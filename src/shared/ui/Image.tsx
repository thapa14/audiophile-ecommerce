import type { FC } from 'react';
import { useState, useRef, useEffect } from 'react';
import { useResponsiveImage } from 'shared/lib/hooks';
import type { ImageByScreen } from 'shared/type-check';
import { cn } from 'shared/lib/utils';

interface ImageProps {
    image: ImageByScreen;
    alt: string;
    className?: string;
    loading?: 'lazy' | 'eager';
    priority?: boolean;
    onLoad?: () => void;
    placeholder?: string;
}

export const Image: FC<ImageProps> = ({ 
    image, 
    alt, 
    className,
    loading = 'lazy',
    priority = false,
    onLoad,
    placeholder
}) => {
    const { bgImage } = useResponsiveImage(image);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (priority && bgImage) {
            // Preload critical images
            const preloadLink = document.createElement('link');
            preloadLink.rel = 'preload';
            preloadLink.as = 'image';
            preloadLink.href = bgImage;
            document.head.appendChild(preloadLink);
            
            return () => {
                if (document.head.contains(preloadLink)) {
                    document.head.removeChild(preloadLink);
                }
            };
        }
    }, [bgImage, priority]);

    const handleLoad = () => {
        setImageLoaded(true);
        onLoad?.();
    };

    const handleError = () => {
        setImageError(true);
    };

    if (!bgImage) {
        return (
            <div className={cn(
                'bg-gray-100 animate-pulse rounded-lg flex items-center justify-center',
                className
            )}>
                <span className="text-gray-400 text-sm">Loading...</span>
            </div>
        );
    }

    if (imageError) {
        return (
            <div className={cn(
                'bg-gray-100 rounded-lg flex items-center justify-center',
                className
            )}>
                <span className="text-gray-400 text-sm">Image unavailable</span>
            </div>
        );
    }

    return (
        <div className={cn('relative overflow-hidden', className)}>
            {/* Placeholder while loading */}
            {!imageLoaded && (
                <div className={cn(
                    'absolute inset-0 bg-gray-100 animate-pulse rounded-lg',
                    placeholder && 'bg-cover bg-center bg-no-repeat'
                )}
                style={placeholder ? { backgroundImage: `url(${placeholder})` } : {}}
                />
            )}
            
            <img
                ref={imgRef}
                src={bgImage}
                alt={alt}
                loading={priority ? 'eager' : loading}
                onLoad={handleLoad}
                onError={handleError}
                className={cn(
                    'w-full h-full object-cover transition-opacity duration-500 ease-in-out',
                    imageLoaded ? 'opacity-100' : 'opacity-0',
                    className
                )}
                {...(priority && { fetchPriority: 'high' } as any)}
            />
        </div>
    );
};