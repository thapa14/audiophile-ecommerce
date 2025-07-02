import { type ComponentType, lazy, type LazyExoticComponent, Suspense } from 'react';
import { ShimmerLoader } from 'shared/ui/ShimmerLoader';

const Loadable = <P extends object>(Component: LazyExoticComponent<ComponentType<P>>, type: string) => {
    return (props: P) => (
        <Suspense 
            fallback={
                <div className="min-h-screen pt-[90px] bg-white/95">
                    <ShimmerLoader 
                        fullScreen={false} 
                        className="min-h-[calc(100vh-90px)]"
                        type="default"
                    />
                </div>
            }
        >
            <Component {...props} />
        </Suspense>
    );
};

export const Home = Loadable(
    lazy(() => import('pages/home').then(module => ({ default: module.Home }))),
    'home'
);

export const Checkout = Loadable(
    lazy(() => import('pages/checkout').then(module => ({ default: module.Checkout }))),
    'default'
);

export const CategoryPage = Loadable(
    lazy(() => import('pages/product-category').then(module => ({ default: module.CategoryPage }))),
    "category"
);

export const ProductDetails = Loadable(
    lazy(() => import('pages/product-details').then(module => ({ default: module.ProductDetails }))),
    'product'
);
