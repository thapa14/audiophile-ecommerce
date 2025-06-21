import { Layout } from 'app/layout/Layout';
import { CategoryPage, Checkout, Home, ProductDetails } from 'app/routers/elements';
import { createBrowserRouter } from 'react-router';

const routes = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/:category',
                Component: CategoryPage,
            },
            {
                path: '/product-details',
                Component: ProductDetails,
            },
            {
                path: '/checkout',
                Component: Checkout,
            },
        ],
    },
]);

export default routes;
