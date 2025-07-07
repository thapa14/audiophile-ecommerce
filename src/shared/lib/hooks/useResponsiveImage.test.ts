import { afterAll, beforeEach, describe, expect, vi, it, afterEach } from 'vitest';
import { act, cleanup, renderHook, waitFor } from '@testing-library/react';
import { useResponsiveImage } from './useResponsiveImage.ts';

const mockImages = {
    mobile: '/images/mobile.jpg',
    tablet: '/images/tablet.jpg',
    desktop: '/images/desktop.jpg',
};

describe('useResponsiveImage', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    afterAll(() => {
        vi.restoreAllMocks();
    });

    beforeEach(() => {
        addEventListenerSpy.mockClear();
        removeEventListenerSpy.mockClear();
    });

    afterEach(() => {
        cleanup();
        vi.clearAllMocks();
    });

    it('should use mobile image for screens < 576px', () => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 575,
        });

        const { result } = renderHook(() => useResponsiveImage(mockImages));

        expect(result.current.bgImage).toBe(mockImages.mobile);
    });

    it('should use tablet image for screens >= 576px and < 1024px', async () => {
        // lower bound
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 576,
        });
        const { result } = renderHook(() => useResponsiveImage(mockImages));
        expect(result.current.bgImage).toBe(mockImages.tablet);

        // upper bound
        await act(async () => {
            Object.defineProperty(window, 'innerWidth', {
                writable: true,
                configurable: true,
                value: 1023,
            });

            window.dispatchEvent(new Event('resize'));
        });

        await waitFor(() => {
            expect(result.current.bgImage).toBe(mockImages.tablet);
        });
    });

    it('should use desktop image for screens >= 1024px', () => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 1024,
        });

        const { result } = renderHook(() => useResponsiveImage(mockImages));
        expect(result.current.bgImage).toBe(mockImages.desktop);
    });

    it('should update image when screen resized', async () => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 500,
        });
        const { result } = renderHook(() => useResponsiveImage(mockImages));
        expect(result.current.bgImage).toBe(mockImages.mobile);

        await act(async () => {
            Object.defineProperty(window, 'innerWidth', {
                writable: true,
                configurable: true,
                value: 1400,
            });
            window.dispatchEvent(new Event('resize'));
        });

        await waitFor(() => {
            expect(result.current.bgImage).toBe(mockImages.desktop);
        });
    });

    it('should clean up event listener on unmount', () => {
        const { unmount } = renderHook(() => useResponsiveImage(mockImages));
        expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
        unmount();

        expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    });
});
