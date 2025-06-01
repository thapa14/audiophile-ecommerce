import {createBrowserRouter} from "react-router";
import {Layout} from "app/layout/Layout";
import Demo from "shared/ui/Demo";

const routes = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: 'home',
                Component: Demo,
            }
        ]

    },
])

export default routes;