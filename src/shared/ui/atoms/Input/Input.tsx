import clsx from 'clsx';
import type { FC, InputHTMLAttributes } from 'react';
import { type FieldError, useFormContext } from 'react-hook-form';

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
            <div className="flex items-center justify-between">
                <label
                    htmlFor={name}
                    className={clsx(
                        'text-xs font-bold -tracking-[0.20px]',
                        clsx({
                            'text-red-700': !!errors?.[name],
                        })
                    )}
                >
                    {label}
                </label>
                {errors?.[name]?.message && (
                    <span className="text-sm text-red-700">
                        {(errors[name] as FieldError)?.message}
                    </span>
                )}
            </div>
            <input
                id={name}
                type={type}
                placeholder={placeholder}
                className={clsx(
                    'rounded-lg bg-white p-4.5 text-sm outline-none placeholder:font-bold placeholder:opacity-40',
                    className,
                    clsx({
                        'border-2 border-red-600 focus:border-red-600': !!errors?.[name],
                        'border-stroke focus:border-peru border-1': !errors?.[name],
                    })
                )}
                {...register(name)}
                {...others}
            />
        </div>
    );
};
