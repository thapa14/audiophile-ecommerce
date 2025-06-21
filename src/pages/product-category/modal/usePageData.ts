import { fetchMockPageData } from 'pages/product-category/api/fetchMockPageData';
import { mapApiProductToPageProduct } from 'pages/product-category/modal/mapApiProductToPageProduct';
import type { ProductPageType } from 'pages/product-category/modal/types';
import type { UsePageDataResult } from 'pages/product-category/modal/usePageData.types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const usePageData = (): UsePageDataResult => {
    const { category } = useParams();
    const [pageData, setPageData] = useState<ProductPageType[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetchMockPageData(category as string)
            .then(response => {
                const pageFormatData = mapApiProductToPageProduct(response);
                setPageData(pageFormatData);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => setLoading(false));
    }, [category]);

    return { pageData, error, category: category as string, loading };
};
