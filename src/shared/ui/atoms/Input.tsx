import clsx from 'clsx';
import type { FC, InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    type?: 'text' | 'number' | 'email' | 'password';
    label?: string;
    placeholder?: string;
    className?: string;
    wrapperClass?: string;
}

export const Input: FC<InputProps> = ({
    name,
    label,
    type = 'text',
    placeholder = '',
    className,
    wrapperClass,
    ...others
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className={clsx('flex flex-col gap-y-2.5', wrapperClass)}>
            <label htmlFor={name} className="text-xs font-bold -tracking-[0.20px]">
                {label}
            </label>
            <input
                id={name}
                type={type}
                placeholder={placeholder}
                className={clsx(
                    'border-stroke focus:border-peru rounded-lg border-1 bg-white p-4.5 text-sm outline-none placeholder:font-bold placeholder:opacity-40',
                    className,
                    clsx({
                        'border-red-600 focus:border-red-600': !!errors?.[name],
                    })
                )}
                {...register(name)}
                {...others}
            />
        </div>
    );
};
