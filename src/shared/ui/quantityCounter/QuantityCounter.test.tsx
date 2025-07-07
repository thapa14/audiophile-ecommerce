import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { QuantityCounter } from 'shared/ui';
import { useState } from 'react';

const TestHarness = () => {
    const [value, setValue] = useState<number>(1);
    return (
        <QuantityCounter
            quantity={value}
            onIncrement={() => {}}
            onDecrement={() => {}}
            onQuantityChange={e => setValue(Number(e.target.value))}
        />
    );
};
describe('QuantityCounter', () => {
    it('should render correctly', () => {
        render(
            <QuantityCounter
                quantity={1}
                onIncrement={() => {}}
                onDecrement={() => {}}
                onQuantityChange={() => {}}
            />
        );
        const quantityCounter = screen.getByRole('group');
        expect(quantityCounter).toBeInTheDocument();
    });

    describe('Increment', () => {
        it('should call the increment function when the increment button is clicked', async () => {
            const mockOnIncrement = vi.fn();
            const mockOnDecrement = vi.fn();
            const mockOnQuantityChange = vi.fn();
            user.setup();
            render(
                <QuantityCounter
                    quantity={1}
                    onIncrement={mockOnIncrement}
                    onDecrement={mockOnDecrement}
                    onQuantityChange={mockOnQuantityChange}
                />
            );
            const incrementButton = screen.getByRole('button', { name: /Increase quantity/i });
            await user.click(incrementButton);
            expect(mockOnIncrement).toHaveBeenCalledTimes(1);
        });

        it('should disable the increment button when max value is reached', async () => {
            user.setup();
            const mockOnIncrement = vi.fn();

            render(
                <QuantityCounter
                    quantity={99}
                    onIncrement={mockOnIncrement}
                    onDecrement={() => {}}
                    onQuantityChange={() => {}}
                />
            );
            const incrementButton = screen.getByRole('button', { name: /Increase quantity/i });
            await user.click(incrementButton);
            expect(mockOnIncrement).not.toHaveBeenCalled();
        });
    });

    describe('Decrement', () => {
        it('should call the decrement function when the decrement button is clicked', async () => {
            const mockOnDecrement = vi.fn();
            user.setup();
            render(
                <QuantityCounter
                    quantity={5}
                    onIncrement={() => {}}
                    onDecrement={mockOnDecrement}
                    onQuantityChange={() => {}}
                />
            );
            const decrementButton = screen.getByRole('button', { name: /Decrease quantity/i });
            await user.click(decrementButton);
            expect(mockOnDecrement).toHaveBeenCalledTimes(1);
        });

        it('should disable the decrement button when min value is reached', async () => {
            user.setup();
            const mockOnDecrement = vi.fn();

            render(
                <QuantityCounter
                    quantity={1}
                    onIncrement={() => {}}
                    onDecrement={mockOnDecrement}
                    onQuantityChange={() => {}}
                />
            );
            const decrementButton = screen.getByRole('button', { name: /Decrease quantity/i });
            await user.click(decrementButton);
            expect(mockOnDecrement).not.toHaveBeenCalled();
        });
    });

    describe('QuantityCounter (isolated)', () => {
        it('forwards change events to onQuantityChange and eventually reports "12"', async () => {
            user.setup();

            render(<TestHarness />);

            const input = screen.getByRole('spinbutton', {
                name: /Current Quantity is /i,
            });

            // Clear whatever is in there (fires some calls)
            await user.clear(input);

            // Type "987" (will fire ≥3 calls under the hood)
            await user.type(input, '12');

            expect(input).toHaveValue(12);
        });
    });
});
