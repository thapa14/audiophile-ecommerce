import { afterAll, afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import useHeader from './useHeader';
import { useNavigate } from 'react-router';

vi.mock('react-router', () => ({
    useNavigate: vi.fn(),
}));

describe('useHeader Hook', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    let originalInnerWidth = 500;
    let mockNavigate = vi.fn();

    beforeEach(() => {
        // Store original innerWidth
        originalInnerWidth = 500;

        // Clear mocks
        addEventListenerSpy.mockClear();
        removeEventListenerSpy.mockClear();

        mockNavigate = vi.fn();
        vi.mocked(useNavigate).mockReturnValue(mockNavigate);
    });

    afterEach(() => {
        // Restore original innerWidth
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: originalInnerWidth,
        });

        cleanup();
        vi.clearAllMocks();
    });

    afterAll(() => {
        vi.restoreAllMocks();
    });

    describe('Initial state and setup', () => {
        it('should initialize with isMenuOpened as false', () => {
            const { result } = renderHook(() => useHeader());
            expect(result.current.isMenuOpened).toBe(false);
        });

        it('should add resize event listener on mount', () => {
            renderHook(() => useHeader());
            expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
        });

        it('should remove resize event listener on unmount', () => {
            const { unmount } = renderHook(() => useHeader());
            unmount();
            expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
        });

        it('should return all expected properties and methods', () => {
            const { result } = renderHook(() => useHeader());

            expect(result.current).toHaveProperty('isMenuOpened');
            expect(result.current).toHaveProperty('toggleMenu');
            expect(result.current).toHaveProperty('setIsMenuOpened');
            expect(result.current).toHaveProperty('navigateToHome');

            expect(typeof result.current.toggleMenu).toBe('function');
            expect(typeof result.current.setIsMenuOpened).toBe('function');
            expect(typeof result.current.navigateToHome).toBe('function');
        });
    });

    describe('Responsive behavior', () => {
        it('should close menu when screen width is >= 1024px', async () => {
            Object.defineProperty(window, 'innerWidth', {
                writable: true,
                configurable: true,
                value: 800,
            });

            const { result } = renderHook(() => useHeader());

            act(() => {
                result.current.toggleMenu();
            });

            expect(result.current.isMenuOpened).toBe(true);

            await act(async () => {
                Object.defineProperty(window, 'innerWidth', {
                    writable: true,
                    configurable: true,
                    value: 1024,
                });
                window.dispatchEvent(new Event('resize'));
            });

            await waitFor(() => {
                expect(result.current.isMenuOpened).toBe(false);
            });
        });

        it('should close menu when screen width is > 1024px', async () => {
            // Set initial width to mobile
            Object.defineProperty(window, 'innerWidth', {
                writable: true,
                configurable: true,
                value: 600,
            });

            const { result } = renderHook(() => useHeader());

            act(() => {
                result.current.toggleMenu();
            });

            expect(result.current.isMenuOpened).toBe(true);

            await act(async () => {
                Object.defineProperty(window, 'innerWidth', {
                    writable: true,
                    configurable: true,
                    value: 1200,
                });
                window.dispatchEvent(new Event('resize'));
            });

            await waitFor(() => {
                expect(result.current.isMenuOpened).toBe(false);
            });
        });

        it('should not change menu state when screen width is < 1024px', async () => {
            // Set initial width to mobile
            Object.defineProperty(window, 'innerWidth', {
                writable: true,
                configurable: true,
                value: 800,
            });

            const { result } = renderHook(() => useHeader());

            act(() => {
                result.current.toggleMenu();
            });

            expect(result.current.isMenuOpened).toBe(true);

            // Change to another mobile width
            await act(async () => {
                Object.defineProperty(window, 'innerWidth', {
                    writable: true,
                    configurable: true,
                    value: 500,
                });
                window.dispatchEvent(new Event('resize'));
            });

            expect(result.current.isMenuOpened).toBe(true);
        });

        it('should handle edge case at exactly 1023px', async () => {
            // Set initial width to mobile
            Object.defineProperty(window, 'innerWidth', {
                writable: true,
                configurable: true,
                value: 800,
            });

            const { result } = renderHook(() => useHeader());

            act(() => {
                result.current.toggleMenu();
            });

            expect(result.current.isMenuOpened).toBe(true);

            await act(async () => {
                Object.defineProperty(window, 'innerWidth', {
                    writable: true,
                    configurable: true,
                    value: 1023,
                });
                window.dispatchEvent(new Event('resize'));
            });

            expect(result.current.isMenuOpened).toBe(true);
        });
    });

    describe('Menu toggle functionality', () => {
        it('should toggle menu from false to true', () => {
            const { result } = renderHook(() => useHeader());

            expect(result.current.isMenuOpened).toBe(false);

            act(() => {
                result.current.toggleMenu();
            });

            expect(result.current.isMenuOpened).toBe(true);
        });

        it('should toggle menu from true to false', () => {
            const { result } = renderHook(() => useHeader());

            // First open the menu
            act(() => {
                result.current.toggleMenu();
            });

            expect(result.current.isMenuOpened).toBe(true);

            // Then close it
            act(() => {
                result.current.toggleMenu();
            });

            expect(result.current.isMenuOpened).toBe(false);
        });

        it('should toggle menu multiple times correctly', () => {
            const { result } = renderHook(() => useHeader());

            // Initial state
            expect(result.current.isMenuOpened).toBe(false);

            // Toggle 1
            act(() => {
                result.current.toggleMenu();
            });
            expect(result.current.isMenuOpened).toBe(true);

            // Toggle 2
            act(() => {
                result.current.toggleMenu();
            });
            expect(result.current.isMenuOpened).toBe(false);

            // Toggle 3
            act(() => {
                result.current.toggleMenu();
            });
            expect(result.current.isMenuOpened).toBe(true);
        });
    });

    describe('Direct menu state setter', () => {
        it('should set menu state directly using setIsMenuOpened', () => {
            const { result } = renderHook(() => useHeader());

            expect(result.current.isMenuOpened).toBe(false);

            act(() => {
                result.current.setIsMenuOpened(true);
            });

            expect(result.current.isMenuOpened).toBe(true);

            act(() => {
                result.current.setIsMenuOpened(false);
            });

            expect(result.current.isMenuOpened).toBe(false);
        });

        it('should work with function-based setter', () => {
            const { result } = renderHook(() => useHeader());

            expect(result.current.isMenuOpened).toBe(false);

            act(() => {
                result.current.setIsMenuOpened(prev => !prev);
            });

            expect(result.current.isMenuOpened).toBe(true);

            act(() => {
                result.current.setIsMenuOpened(prev => !prev);
            });

            expect(result.current.isMenuOpened).toBe(false);
        });
    });

    describe('Navigation functionality', () => {
        it('should call navigate function when navigateToHome is called', () => {
            const { result } = renderHook(() => useHeader());
            act(() => {
                result.current.navigateToHome();
            });
            expect(mockNavigate).toHaveBeenCalledWith('/');
        });
    });

    describe('Function reference stability', () => {
        it('should maintain stable references for callback functions', () => {
            const { result, rerender } = renderHook(() => useHeader());

            const initialToggleMenu = result.current.toggleMenu;
            const initialNavigateToHome = result.current.navigateToHome;
            const initialSetIsMenuOpened = result.current.setIsMenuOpened;

            // Force a re-render
            rerender();

            expect(result.current.toggleMenu).toBe(initialToggleMenu);
            expect(result.current.navigateToHome).toBe(initialNavigateToHome);
            expect(result.current.setIsMenuOpened).toBe(initialSetIsMenuOpened);
        });
    });

    describe('Event listener cleanup', () => {
        it('should properly clean up event listeners on unmount', () => {
            const { unmount } = renderHook(() => useHeader());

            // Verify listener was added
            expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));

            // Unmount the hook
            unmount();

            // Verify listener was removed
            expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
        });

        it('should handle multiple mount/unmount cycles', () => {
            const { unmount: unmount1 } = renderHook(() => useHeader());
            const { unmount: unmount2 } = renderHook(() => useHeader());

            expect(addEventListenerSpy).toHaveBeenCalledTimes(2);

            unmount1();
            unmount2();

            expect(removeEventListenerSpy).toHaveBeenCalledTimes(2);
        });
    });

    describe('Edge cases', () => {
        it('should handle window resize events when menu is already in correct state', async () => {
            // Start with desktop width
            Object.defineProperty(window, 'innerWidth', {
                writable: true,
                configurable: true,
                value: 1200,
            });

            const { result } = renderHook(() => useHeader());

            // Menu should be closed initially
            expect(result.current.isMenuOpened).toBe(false);

            // Resize to another desktop width
            await act(async () => {
                Object.defineProperty(window, 'innerWidth', {
                    writable: true,
                    configurable: true,
                    value: 1400,
                });
                window.dispatchEvent(new Event('resize'));
            });

            // Menu should remain closed
            expect(result.current.isMenuOpened).toBe(false);
        });

        it('should handle resize event when menu is closed on mobile', async () => {
            // Start with mobile width
            Object.defineProperty(window, 'innerWidth', {
                writable: true,
                configurable: true,
                value: 800,
            });

            const { result } = renderHook(() => useHeader());

            // Menu should be closed initially
            expect(result.current.isMenuOpened).toBe(false);

            // Resize to another mobile width
            await act(async () => {
                Object.defineProperty(window, 'innerWidth', {
                    writable: true,
                    configurable: true,
                    value: 600,
                });
                window.dispatchEvent(new Event('resize'));
            });

            // Menu should remain closed
            expect(result.current.isMenuOpened).toBe(false);
        });
    });
});