import { Layout } from 'app/layout/Layout';
import { Home } from 'pages/home';
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
        ],
    },
]);

export default routes;
