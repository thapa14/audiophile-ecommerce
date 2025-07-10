import { afterAll, beforeEach, describe, expect, vi, it } from 'vitest';
import { CartItem } from './CartItem.tsx';
import { render, screen, cleanup } from '@testing-library/react';
import allProducts from 'shared/data.json';
import userEvent from '@testing-library/user-event';

vi.mock('shared/lib/hooks/useResponsiveImage', () => ({
    useResponsiveImage: () => ({ bgImage: 'bgImage' }),
}));

const mockIncrement = vi.fn();
const mockDecrement = vi.fn();
vi.mock('entities/cart/modal/cartContext', () => ({
    useCartContext: () => ({
        onProductQuantityIncrement: mockIncrement,
        onProductQuantityDecrement: mockDecrement,
    }),
}));

const mockCartItem = {
    id: 1,
    quantity: 2,
    price: 250,
};

describe('CartItem', () => {
    const renderCartItem = () => {
        return render(<CartItem data={mockCartItem} />);
    };

    const product = allProducts.find(p => p.id === mockCartItem.id);
    const user = userEvent.setup();

    beforeEach(() => {
        vi.clearAllMocks();
    });


    it('should render image correctly', () => {
        renderCartItem();
        const imageElement = screen.getByAltText(/product/i);
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', 'bgImage');
    });

    it('should render product name, price correctly', () => {
        renderCartItem();
        const productNameElement = screen.getByText(product!.name);
        const productPriceElement = screen.getByText(`$ ${product!.price}`);
        expect(productNameElement).toBeInTheDocument();
        expect(productPriceElement).toBeInTheDocument();
    });

    it('should render cart quantity correctly', () => {
        renderCartItem();
        const quantityElement = screen.getByRole('spinbutton') as HTMLInputElement;
        expect(quantityElement).toHaveValue(mockCartItem.quantity);
    });

    it('should have disabled quantity field', () => {
        renderCartItem();
        const quantityElement = screen.getByRole('spinbutton') as HTMLInputElement;
        expect(quantityElement).toBeDisabled();
    });

    it('should call increment handler when + button is clicked', async () => {
        renderCartItem();
        const incrementButton = screen.getByRole('button', { name: /increase quantity/i });
        await user.click(incrementButton);
        expect(mockIncrement).toHaveBeenCalledTimes(1);
        expect(mockIncrement).toHaveBeenCalledWith(mockCartItem.id);
    });

    it('should call decrement handler when - button is clicked', async () => {
        renderCartItem();
        const decrementButton = screen.getByRole('button', { name: /decrease quantity/i });
        await user.click(decrementButton);
        expect(mockDecrement).toHaveBeenCalledTimes(1);
        expect(mockDecrement).toHaveBeenCalledWith(mockCartItem.id);
    });
});
