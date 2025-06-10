import { useCallback } from 'react';
import { type NavigateOptions, type To, useNavigate } from 'react-router';

export const useNavigateToProductDetails = () => {
    const navigate = useNavigate();

    return useCallback(
        (path: To, options?: NavigateOptions) => {
            navigate(path, options);
        },
        [navigate]
    );
};
