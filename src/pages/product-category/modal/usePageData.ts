import type { UsePageDataResult } from 'pages/product-category/modal/usePageData.types';
import { useEffect, useState } from 'react';
import { fetchMockPageData } from 'pages/product-category/api/fetchMockPageData';
import { mapApiProductToPageProduct } from 'pages/product-category/modal/mapApiProductToPageProduct';
import type { ProductPageType } from 'pages/product-category/modal/types';
import { useParams } from 'react-router';

export const usePageData = (): UsePageDataResult => {
    const { category } = useParams();
    const [pageData, setPageData] = useState<ProductPageType[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetchMockPageData(category as string)
            .then(response => {
                const pageFormatData = mapApiProductToPageProduct(response);
                setPageData(pageFormatData);
            })
            .catch(err => {
                setError(err);
            });
    }, [category]);

    return { pageData, error, category: category as string };
};
