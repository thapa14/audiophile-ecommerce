import { Icon } from '@iconify/react';
import clsx from 'clsx';
import type { ChangeEventHandler, FC } from 'react';

type QuantityCounterProps = {
    className: string;
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onQuantityChange: ChangeEventHandler<HTMLInputElement>;
    inputDisabled?: boolean;
};

export const QuantityCounter: FC<QuantityCounterProps> = ({
    quantity,
    className,
    onIncrement,
    onDecrement,
    onQuantityChange,
    inputDisabled = false,
}) => {
    return (
        <div className={clsx('bg-whitesmoke flex items-center px-2', className)}>
            <Icon
                icon="ri:subtract-fill"
                width="16"
                height="18"
                className="hover:text-peru cursor-pointer opacity-30 select-none hover:opacity-100"
                onClick={onDecrement}
            />
            <input
                type="text"
                placeholder=""
                className="border:none w-full text-center font-semibold focus:outline-none"
                value={quantity}
                onChange={onQuantityChange}
                disabled={inputDisabled}
            />
            <Icon
                icon="material-symbols:add-rounded"
                width="16"
                height="18"
                className="hover:text-peru cursor-pointer opacity-30 select-none hover:opacity-100"
                onClick={onIncrement}
            />
        </div>
    );
};
