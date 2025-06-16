import type { ChangeEventHandler } from 'react';

export type UseAddToCartReturn = {
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onQuantityChange: (event: ChangeEventHandler<HTMLInputElement>) => void;
    onAddToCart: () => void;
    hasAlreadyAdded: boolean;
};
