import type { Product } from 'entities/product';
import { fetchMockProductDetails } from 'pages/product-details/api/fetchMockProductDetails';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

export const useProductDetails = () => {
    const [productData, setProductData] = useState<Product | null>(null);
    const [searchParams] = useSearchParams();
    const productId = searchParams.get('pid');
    const slug = searchParams.get('name');

    useEffect(() => {
        fetchMockProductDetails(productId, slug).then(response => {
            setProductData(response);
        });
    });

    return { productData };
};
