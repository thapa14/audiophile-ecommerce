import { Layout } from 'app/layout/Layout';
import { Home } from 'pages/home';
import { CategoryPage } from 'pages/product-category';
import { ProductDetails } from 'pages/product-details';
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
        ],
    },
]);

export default routes;
