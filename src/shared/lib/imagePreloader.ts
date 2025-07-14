interface ImagePreloadOptions {
    src: string;
    priority?: boolean;
    sizes?: string;
    fetchPriority?: 'high' | 'low' | 'auto';
}

interface PreloadResult {
    success: boolean;
    src: string;
    error?: string;
}

class ImagePreloader {
    private preloadedImages = new Set<string>();
    private pendingPreloads = new Map<string, Promise<PreloadResult>>();

    /**
     * Preload a single image
     */
    async preloadImage({ src, priority = false, sizes, fetchPriority = 'auto' }: ImagePreloadOptions): Promise<PreloadResult> {
        if (this.preloadedImages.has(src)) {
            return { success: true, src };
        }

        if (this.pendingPreloads.has(src)) {
            return this.pendingPreloads.get(src)!;
        }

        const preloadPromise = this.createPreloadPromise(src, priority, sizes, fetchPriority);
        this.pendingPreloads.set(src, preloadPromise);

        try {
            const result = await preloadPromise;
            if (result.success) {
                this.preloadedImages.add(src);
            }
            this.pendingPreloads.delete(src);
            return result;
        } catch (error) {
            this.pendingPreloads.delete(src);
            throw error;
        }
    }

    /**
     * Preload multiple images
     */
    async preloadImages(images: ImagePreloadOptions[]): Promise<PreloadResult[]> {
        return Promise.all(images.map(options => this.preloadImage(options)));
    }

    /**
     * Preload critical images using link preload
     */
    preloadCritical(images: ImagePreloadOptions[]): void {
        images.forEach(({ src, sizes, fetchPriority = 'high' }) => {
            if (typeof document === 'undefined') return;

            try {
                // Check if already preloaded
                const existingPreload = document.querySelector(`link[rel="preload"][href="${src}"]`);
                if (existingPreload) return;

                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = src;
                if (sizes) link.setAttribute('imagesizes', sizes);
                if (fetchPriority) link.setAttribute('fetchpriority', fetchPriority);

                document.head.appendChild(link);
                this.preloadedImages.add(src);
            } catch (error) {
                // Handle DOM manipulation errors gracefully
                console.warn(`Failed to preload image: ${src}`, error);
                // Fallback: still mark as "preloaded" to avoid repeated attempts
                this.preloadedImages.add(src);
            }
        });
    }

    /**
     * Check if image is preloaded
     */
    isPreloaded(src: string): boolean {
        return this.preloadedImages.has(src);
    }

    /**
     * Clear preload cache
     */
    clearCache(): void {
        this.preloadedImages.clear();
        this.pendingPreloads.clear();
    }

    private createPreloadPromise(
        src: string, 
        priority: boolean, 
        sizes?: string, 
        fetchPriority?: string
    ): Promise<PreloadResult> {
        return new Promise((resolve) => {
            if (priority && typeof document !== 'undefined') {
                try {
                    // Use link preload for critical images
                    const link = document.createElement('link');
                    link.rel = 'preload';
                    link.as = 'image';
                    link.href = src;
                    if (sizes) link.setAttribute('imagesizes', sizes);
                    if (fetchPriority) link.setAttribute('fetchpriority', fetchPriority);

                    link.onload = () => resolve({ success: true, src });
                    link.onerror = () => resolve({ success: false, src, error: 'Failed to preload via link' });

                    document.head.appendChild(link);
                } catch (error) {
                    // Handle DOM manipulation errors
                    console.warn(`Failed to create preload link for: ${src}`, error);
                    resolve({ success: false, src, error: `DOM error: ${error instanceof Error ? error.message : 'Unknown error'}` });
                }
            } else {
                try {
                    // Use Image object for regular preloading
                    const img = new Image();
                    
                    img.onload = () => resolve({ success: true, src });
                    img.onerror = () => resolve({ success: false, src, error: 'Failed to load image' });
                    
                    // Set sizes attribute if provided
                    if (sizes) img.sizes = sizes;
                    
                    img.src = src;
                } catch (error) {
                    // Handle Image object creation errors
                    console.warn(`Failed to create Image object for: ${src}`, error);
                    resolve({ success: false, src, error: `Image creation error: ${error instanceof Error ? error.message : 'Unknown error'}` });
                }
            }
        });
    }
}

// Singleton instance
export const imagePreloader = new ImagePreloader();

// Convenience functions
export const preloadImage = (options: ImagePreloadOptions) => imagePreloader.preloadImage(options);
export const preloadImages = (images: ImagePreloadOptions[]) => imagePreloader.preloadImages(images);
export const preloadCritical = (images: ImagePreloadOptions[]) => imagePreloader.preloadCritical(images);
export const isImagePreloaded = (src: string) => imagePreloader.isPreloaded(src);

// Preload hero images on app start
export const preloadHeroImages = () => {
    const heroImages = [
        { src: '/assets/home/mobile/image-hero.jpg', priority: true, fetchPriority: 'high' as const },
        { src: '/assets/home/tablet/image-hero.jpg', priority: true, fetchPriority: 'high' as const },
        { src: '/assets/home/desktop/image-hero.jpg', priority: true, fetchPriority: 'high' as const },
    ];
    
    preloadCritical(heroImages);
};

// Preload category images
export const preloadCategoryImages = () => {
    const categoryImages = [
        { src: '/assets/shared/desktop/image-category-thumbnail-headphones.png' },
        { src: '/assets/shared/desktop/image-category-thumbnail-speakers.png' },
        { src: '/assets/shared/desktop/image-category-thumbnail-earphones.png' },
    ];
    
    preloadImages(categoryImages);
};