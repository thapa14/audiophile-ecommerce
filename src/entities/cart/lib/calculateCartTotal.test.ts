import { expect, it } from 'vitest';
import { calculateCartTotal } from 'entities/cart';

const items = [
    {
        id: 1,
        quantity: 2,
        price: 199,
    },
    {
        id: 2,
        quantity: 2,
        price: 50,
    },
];

it('should calculate the total of cart', () => {
    const result = calculateCartTotal(items);
    expect(result).toBe(498)
});
