import type { FC, InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    placeholder?: string;
    className?: string;
    options: string[] | { label: string; value: string | number }[];
}

export const Radio: FC<InputProps> = ({ name, label, placeholder = '', options }) => {
    const { register } = useFormContext();
    return (
        <div className="flex flex-col gap-y-4">
            <h6 className="text-sm">{label}</h6>
            <div className="flex flex-col gap-y-4">
                {options.map((option, index) => (
                    <label
                        key={(typeof option === 'string' ? option : option.label) + index}
                        htmlFor={typeof option === 'string' ? option : option.label}
                        className="border-stroke has-checked:border-peru flex gap-x-4 rounded-lg border-1 p-4"
                    >
                        <input
                            id={typeof option === 'string' ? option : option.label}
                            type="radio"
                            value={typeof option === 'string' ? option : option.label}
                            placeholder={placeholder}
                            {...register(name)}
                            className="accent-peru scale-150"
                        />
                        <span className="text-sm font-bold -tracking-[0.20px]">
                            {typeof option === 'string' ? option : option.label}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};
