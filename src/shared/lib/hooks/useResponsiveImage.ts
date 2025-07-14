import { useEffect, useMemo, useState, useCallback } from 'react';

interface UseResponsiveImageReturn {
    bgImage: string | null;
    isLoading: boolean;
    preloadImages: () => void;
}

interface UseResponsiveImageOptions {
    mobile: string;
    tablet: string;
    desktop: string;
}

// Helper to get current image based on screen width
const getCurrentImage = (mobile: string, tablet: string, desktop: string): string => {
    if (typeof window === 'undefined') return desktop; // SSR fallback
    
    const width = window.innerWidth;
    if (width >= 1024) return desktop;
    if (width >= 576) return tablet;
    return mobile;
};

// Debounce helper for resize events
function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
    let timeoutId: NodeJS.Timeout;
    return ((...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    }) as T;
}

export function useResponsiveImage({
    mobile,
    tablet,
    desktop,
}: UseResponsiveImageOptions): UseResponsiveImageReturn {
    const [bgImage, setBgImage] = useState<string | null>(() => 
        getCurrentImage(mobile, tablet, desktop)
    );
    const [isLoading, setIsLoading] = useState(true);

    const updateImage = useCallback(() => {
        const newImage = getCurrentImage(mobile, tablet, desktop);
        if (newImage !== bgImage) {
            setIsLoading(true);
            setBgImage(newImage);
        }
    }, [mobile, tablet, desktop, bgImage]);

    const debouncedUpdateImage = useMemo(
        () => debounce(updateImage, 150),
        [updateImage]
    );

    const preloadImages = useCallback(() => {
        // Preload all image variants
        [mobile, tablet, desktop].forEach(src => {
            if (src) {
                const img = new Image();
                img.src = src;
            }
        });
    }, [mobile, tablet, desktop]);

    useEffect(() => {
        // Initial setup
        const initialImage = getCurrentImage(mobile, tablet, desktop);
        setBgImage(initialImage);
        
        // Preload current image to check loading state
        if (initialImage) {
            const img = new Image();
            img.onload = () => setIsLoading(false);
            img.onerror = () => setIsLoading(false);
            img.src = initialImage;
        }

        // Setup resize listener
        window.addEventListener('resize', debouncedUpdateImage);
        return () => {
            window.removeEventListener('resize', debouncedUpdateImage);
        };
    }, [mobile, tablet, desktop, debouncedUpdateImage]);

    // Update loading state when image changes
    useEffect(() => {
        if (bgImage) {
            setIsLoading(true);
            const img = new Image();
            img.onload = () => setIsLoading(false);
            img.onerror = () => setIsLoading(false);
            img.src = bgImage;
        }
    }, [bgImage]);

    return useMemo(() => ({ 
        bgImage, 
        isLoading,
        preloadImages 
    }), [bgImage, isLoading, preloadImages]);
}
