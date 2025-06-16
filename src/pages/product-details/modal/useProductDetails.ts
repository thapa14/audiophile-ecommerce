import type { Product } from 'entities/product';
import { fetchMockProductDetails } from 'pages/product-details/api/fetchMockProductDetails';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

export const useProductDetails = () => {
    const [productData, setProductData] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const productId = searchParams.get('pid');
    const slug = searchParams.get('name');

    useEffect(() => {
        setLoading(true);
        fetchMockProductDetails(productId, slug)
            .then(response => {
                setProductData(response);
            })
            .finally(() => setLoading(false));
    }, [productId, slug]);

    const onBackClick = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return { productData, loading, onBackClick };
};
