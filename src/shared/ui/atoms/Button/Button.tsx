import type { ReactNode } from 'react';
import clsx from 'clsx';
import { Icon } from '@iconify/react';

type ButtonProps = {
    children: ReactNode;
    className?: string;
    icon?: string;
    iconClass?: string;
    iconPlacement?: 'start' | 'end';
    variant?: 'contained' | 'outlined' | 'text';
};

export default function Button({
    children,
    variant = 'contained',
    icon,
    iconPlacement = 'end',
    className,
    iconClass,
    ...other
}: ButtonProps) {
    const baseClass =
        'inline-flex items-center justify-center gap-2 font-bold text-[13px] tracking-[1px] cursor-pointer';

    const variantClass = clsx({
        'w-40 h-12': variant !== 'text',
        'text-white bg-peru hover:bg-peru-light': variant === 'contained',
        'text-black bg-white border-2 border-black hover:text-white hover:bg-black':
            variant === 'outlined',
    });

    return (
        <button className={clsx(baseClass, variantClass, className)} {...other}>
            {icon && iconPlacement === 'start' && (
                <Icon
                    icon={icon}
                    width={iconSize}
                    height={iconSize}
                    className={clsx('text-peru h-[18px] w-[18px] opacity-100', iconClass)}
                />
            )}
            {children}
            {icon && iconPlacement === 'end' && (
                <Icon
                    icon={icon}
                    className={clsx('text-peru h-[18px] w-[18px] opacity-100', iconClass)}
                />
            )}
        </button>
    );
}
