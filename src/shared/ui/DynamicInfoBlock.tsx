import clsx from 'clsx';
import type { ComponentProps } from 'react';
import { Button } from 'shared/ui/index';

const DynamicInfoBlock = ({ className, ...props }: ComponentProps<'div'>) => {
    return (
        <div
            className={clsx(
                'flex max-w-[328px] flex-col items-center text-white sm:max-w-[380px] lg:w-[400px] lg:items-start',
                className
            )}
            {...props}
        />
    );
};

export { DynamicInfoBlock };

DynamicInfoBlock.Feature = ({ className, ...props }: ComponentProps<'p'>) => {
    return <p className={clsx('mb-4 overline opacity-50 sm:mb-6', className)} {...props} />;
};

DynamicInfoBlock.Title = ({ className, ...props }: ComponentProps<'h2'>) => {
    return <h2 className={clsx('mb-6 text-center lg:text-start', className)} {...props} />;
};

DynamicInfoBlock.Description = ({ className, ...props }: ComponentProps<'p'>) => {
    return (
        <p
            className={clsx(
                'mb-7 text-center opacity-75 sm:mb-10 sm:px-4 lg:px-0 lg:text-start',
                className
            )}
            {...props}
        />
    );
};

DynamicInfoBlock.Button = ({ className, ...props }: ComponentProps<typeof Button>) => {
    console.log(props);
    return <Button className={clsx('uppercase lg:mt-2', className)} {...props} />;
};
