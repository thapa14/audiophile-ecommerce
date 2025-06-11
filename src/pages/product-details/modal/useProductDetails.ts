import type { Product } from 'entities/product';
import { fetchMockProductDetails } from 'pages/product-details/api/fetchMockProductDetails';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

export const useProductDetails = () => {
    const [productData, setProductData] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
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

    return { productData, loading };
};
