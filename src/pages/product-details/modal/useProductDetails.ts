import type { Product } from 'entities/product';
import { fetchMockProductDetails } from 'pages/product-details/api/fetchMockProductDetails';
import { useCallback, useLayoutEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

export const useProductDetails = () => {
    const [productData, setProductData] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const productId = searchParams.get('pid');
    const slug = searchParams.get('name');

    useLayoutEffect(() => {
        setLoading(true);
        fetchMockProductDetails(productId, slug)
            .then(response => {
                setProductData(response);
            })
            .catch(() => setProductData(null))
            .finally(() => setLoading(false));
    }, [productId, slug]);

    const onBackClick = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return { productData, loading, onBackClick };
};
