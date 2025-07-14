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

// Debounce helper for resize events with cleanup
function createDebouncedFunction<T extends (...args: Parameters<T>) => void>(
    fn: T, 
    delay: number
): { debouncedFn: T; cleanup: () => void } {
    let timeoutId: NodeJS.Timeout | null = null;
    
    const debouncedFn = ((...args: Parameters<T>) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
            timeoutId = null;
        }, delay);
    }) as T;
    
    const cleanup = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    };
    
    return { debouncedFn, cleanup };
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

    const { debouncedFn: debouncedUpdateImage, cleanup: cleanupDebounce } = useMemo(
        () => createDebouncedFunction(updateImage, 150),
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

        // Setup resize listener
        window.addEventListener('resize', debouncedUpdateImage);
        return () => {
            window.removeEventListener('resize', debouncedUpdateImage);
            cleanupDebounce(); // Clear any pending debounced calls
        };
    }, [mobile, tablet, desktop, debouncedUpdateImage, cleanupDebounce]);

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
