import type { SeeProductButtonProps } from 'features/view-product/modal/types';
import { useNavigateToProductDetails } from 'features/view-product/modal/useNavigateToProductDetails';
import type { FC } from 'react';
import { Button } from 'shared/ui';

export const SeeProductButton: FC<SeeProductButtonProps> = ({ slug, pId, ...others }) => {
    const navigateToProductDetails = useNavigateToProductDetails();

    return (
        <Button
            {...others}
            onClick={() => {
                const params = new URLSearchParams();
                if (slug) params.set('name', slug);
                if (pId) params.set('pid', pId.toString());
                navigateToProductDetails({
                    pathname: '/product-details',
                    search: `?${params.toString()}`,
                });
            }}
        >
            See Product
        </Button>
    );
};
