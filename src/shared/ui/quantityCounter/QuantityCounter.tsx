import { Icon } from '@iconify/react';
import clsx from 'clsx';
import type { ChangeEventHandler, FC, KeyboardEvent } from 'react';

type QuantityCounterProps = {
    className?: string;
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onQuantityChange: ChangeEventHandler<HTMLInputElement>;
    inputDisabled?: boolean;
    'aria-label'?: string;
    min?: number;
    max?: number;
};

export const QuantityCounter: FC<QuantityCounterProps> = ({
    quantity,
    className,
    onIncrement,
    onDecrement,
    onQuantityChange,
    inputDisabled = false,
    'aria-label': ariaLabel = 'Quantity',
    min = 1,
    max = 10,
}) => {

    console.log(quantity);
    const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, action: () => void) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            action();
        }
    };

    return (
        <div
            className={clsx('bg-whitesmoke flex items-center px-2', className)}
            role="group"
            aria-label={`${ariaLabel} selector`}
        >
            <button
                type="button"
                onClick={onDecrement}
                onKeyDown={(e) => handleKeyDown(e, onDecrement)}
                className="hover:text-peru cursor-pointer opacity-30 select-none hover:opacity-100 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-peru focus-visible:ring-offset-2 rounded focus-visible:outline-none focus-visible:ring-offset-2"
                aria-label={`Decrease ${ariaLabel}`}
                disabled={quantity <= min}
            >
                <Icon icon="ri:subtract-fill" width="16" height="18" aria-hidden="true" />
            </button>

            <label htmlFor="quantity-input" className="sr-only">
                {ariaLabel}
            </label>
            <input
                id="quantity-input"
                type="number"
                min={min}
                max={max}
                value={quantity}
                onChange={onQuantityChange}
                disabled={inputDisabled}
                aria-valuenow={quantity}
                aria-valuemin={min}
                aria-valuemax={max}
                className="border:none w-full text-center font-semibold focus:outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                aria-label={`Current ${ariaLabel} is ${quantity}`}
                inputMode="numeric"
                pattern="[0-9]*"
            />

            <button
                type="button"
                onClick={onIncrement}
                onKeyDown={(e) => handleKeyDown(e, onIncrement)}
                className="hover:text-peru cursor-pointer opacity-30 select-none hover:opacity-100 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-peru focus-visible:ring-offset-2 rounded focus-visible:outline-none focus-visible:ring-offset-2"
                aria-label={`Increase ${ariaLabel}`}
                disabled={quantity >= max}
            >
                <Icon icon="material-symbols:add-rounded" width="16" height="18" aria-hidden="true" />
            </button>
        </div>
    );
};

         