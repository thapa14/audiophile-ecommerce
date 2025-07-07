import type { FC, InputHTMLAttributes } from 'react';
import { type FieldError, useFormContext } from 'react-hook-form';

type Options = string | { label: string; value: string | number };

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    placeholder?: string;
    className?: string;
    options: Options[];
}

export const Radio: FC<InputProps> = ({ name, label, placeholder = '', options }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between">
                <h6 className="text-sm">{label}</h6>
                {errors?.[name]?.message && (
                    <span className="text-sm text-red-700">
                        {(errors[name] as FieldError)?.message}
                    </span>
                )}
            </div>

            <div className="flex flex-col gap-y-4">
                {options.map((option, index) => (
                    <label
                        key={(typeof option === 'string' ? option : option.label) + index}
                        htmlFor={typeof option === 'string' ? option : option.label}
                        className={`has-checked:border-peru flex gap-x-4 rounded-lg border-1 p-4 ${errors?.[name] ? 'border-red-700' : 'boder-stroke'}`}
                    >
                        <input
                            id={typeof option === 'string' ? option : option.label}
                            type="radio"
                            value={typeof option === 'string' ? option : option.value}
                            placeholder={placeholder}
                            {...register(name)}
                            className="accent-peru scale-150"
                        />
                        <span
                            className={`text-sm font-bold -tracking-[0.20px] ${errors?.[name] ? 'text-red-700' : 'text-black'}`}
                        >
                            {typeof option === 'string' ? option : option.label}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};
