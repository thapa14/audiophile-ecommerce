import type { FC } from 'react';

export const PageLoader: FC = () => {
    return (
        <div className="bg-opacity-60 fixed inset-0 top-[90px] z-50 flex items-center justify-center bg-black">
            <div className="flex flex-col items-center space-y-4">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
                <p className="text-lg font-medium text-white">Loading...</p>
            </div>
        </div>
    );
};
