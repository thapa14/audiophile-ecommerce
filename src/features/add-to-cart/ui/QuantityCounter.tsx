import { Icon } from '@iconify/react';
import type { ChangeEventHandler, Dispatch, FC, SetStateAction } from 'react';

type QuantityCounterProps = {
    quantity: number;
    setQuantity: Dispatch<SetStateAction<number>>;
};

export const QuantityCounter: FC<QuantityCounterProps> = ({ quantity, setQuantity }) => {
    const handleQuantityDecrement = () => {
        setQuantity(prev => {
            if (!prev) {
                return 0;
            }
            return prev - 1;
        });
    };
    const handleQuantityIncrement = () => {
        setQuantity(prev => prev + 1);
    };
    const handleQuantityChange: ChangeEventHandler<HTMLInputElement> = e => {
        const val = Number(e.target.value);
        if (val >= 0) {
            setQuantity(Number(val));
        } else {
            setQuantity(0);
        }
    };
    return (
        <div className="bg-whitesmoke flex items-center px-2">
            <Icon
                icon="ri:subtract-fill"
                width="20"
                height="20"
                className="hover:text-peru cursor-pointer opacity-30 select-none hover:opacity-100"
                onClick={handleQuantityDecrement}
            />
            <input
                type="text"
                className="border:none w-20 text-center font-semibold focus:outline-none"
                value={quantity}
                onChange={handleQuantityChange}
            />
            <Icon
                icon="material-symbols:add-rounded"
                width="20"
                height="20"
                className="hover:text-peru cursor-pointer opacity-30 select-none hover:opacity-100"
                onClick={handleQuantityIncrement}
            />
        </div>
    );
};
