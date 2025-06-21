import { type ComponentType, lazy, type LazyExoticComponent, Suspense } from 'react';
import { PageLoader } from 'shared/ui/PageLoader';

const Loadable = <P extends object>(Component: LazyExoticComponent<ComponentType<P>>) => {
    return (props: P) => (
        <Suspense fallback={<PageLoader />}>
            <Component {...props} />
        </Suspense>
    );
};

export const Home = Loadable(
    lazy(() => import('pages/home').then(module => ({ default: module.Home })))
);

export const Checkout = Loadable(
    lazy(() => import('pages/checkout').then(module => ({ default: module.Checkout })))
);

export const CategoryPage = Loadable(
    lazy(() => import('pages/product-category').then(module => ({ default: module.CategoryPage })))
);

export const ProductDetails = Loadable(
    lazy(() => import('pages/product-details').then(module => ({ default: module.ProductDetails })))
);
