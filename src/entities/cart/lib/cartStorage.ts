const CART_STORAGE_KEY = 'audiophile_cart';

type CartItems = Array<{
    id: number;
    quantity: number;
    price: number;
}>;

export const getStoredCart = (): CartItems | null => {
    if (typeof window === 'undefined') {
        return null;
    }

    try {
        const storedCart = localStorage.getItem(CART_STORAGE_KEY);
        return storedCart ? JSON.parse(storedCart) : null;
    } catch (error) {
        console.error('Error reading cart from localStorage:', error);
        return null;
    }
};

export const setStoredCart = (cartItems: CartItems): void => {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
        console.error('Error saving cart to localStorage:', error);
    }
};

export const clearStoredCart = (): void => {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        localStorage.removeItem(CART_STORAGE_KEY);
    } catch (error) {
        console.error('Error clearing cart from localStorage:', error);
    }
};
