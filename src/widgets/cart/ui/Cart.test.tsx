import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Cart } from './Cart.tsx';
import { CartContext, type CartItemsType } from 'entities/cart';
import { userEvent } from '@testing-library/user-event';

const mockOnCheckout = vi.fn();
vi.mock('widgets/cart/modal/useCart', () => ({
    useCart: () => ({ onCheckout: mockOnCheckout }),
}));

vi.mock('entities/cart', async importOriginal => {
    const actual = await importOriginal();
    return {
        ...(actual as object),
        calculateCartTotal: vi.fn(),
    };
});

describe('Cart Component', () => {
    const mockOnRemoveAll = vi.fn();
    const mockCartItems: CartItemsType[] = [
        {
            id: 1,
            quantity: 2,
            price: 250,
        },
        {
            id: 2,
            quantity: 2,
            price: 200,
        },
    ];
    const user = userEvent.setup();

    beforeEach(async () => {
        vi.clearAllMocks();

        const cartModule = await import('entities/cart');
        vi.mocked(cartModule.calculateCartTotal).mockReturnValue(900);
    });

    const renderCart = (cartItems: CartItemsType[]) => {
        render(
            <CartContext.Provider
                value={{
                    isCartOpened: true,
                    cartItems: cartItems,
                    showCart: () => {},
                    hideCart: () => {},
                    addToCart: () => {},
                    onRemoveAll: mockOnRemoveAll,
                    onProductQuantityIncrement: () => {},
                    onProductQuantityDecrement: () => {},
                    onResetAll: () => {},
                }}
            >
                <Cart />
            </CartContext.Provider>
        );
    };

    it('should render empty cart message', () => {
        renderCart([]);
        expect(screen.getByRole('heading', { name: 'Empty Cart' })).toBeInTheDocument();
        expect(screen.queryByRole('button', { name: /remove all/i })).not.toBeInTheDocument();
        expect(screen.queryByRole('button', { name: /checkout/i })).not.toBeInTheDocument();
    });


    it("should render cart elements", () => {
        renderCart(mockCartItems);
        const cartItemsWrapper = screen.getByTestId("cart-item-wrapper")
        expect(cartItemsWrapper.childElementCount).toBe(2)
    });

    it('should render cart length', () => {
        renderCart(mockCartItems);
        const cartLengthTextElement = screen.getByRole('heading', { name: 'Cart (2)' });
        expect(cartLengthTextElement).toBeInTheDocument();
    });


    it('should render correct cart total ', () => {
        renderCart(mockCartItems);
        const cartTotalElement = screen.getByRole('heading', { name: '$ 900' });
        expect(cartTotalElement).toBeInTheDocument();
    });

    it('should call checkout function when click on Checkout button', async () => {
        renderCart(mockCartItems);
        const checkoutButtonElement = screen.getByRole('button', { name: /checkout/i });
        await user.click(checkoutButtonElement);
        expect(mockOnCheckout).toHaveBeenCalledTimes(1);
    });

    it('should call onRemoveAll function when clicked on Remove all button', async () => {
        renderCart(mockCartItems);
        const removeAllButtonElement = screen.getByRole('button', { name: /remove all/i });
        await user.click(removeAllButtonElement);
        expect(mockOnRemoveAll).toHaveBeenCalledTimes(1)
    })

});
