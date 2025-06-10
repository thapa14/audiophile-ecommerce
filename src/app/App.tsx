import 'shared/tailwind-configs/index.css';
import ContextProvider from 'app/providers/Providers';
import routers from 'app/routers';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router';

function App() {
    return (
        <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
            <ContextProvider>
                <RouterProvider router={routers} />
            </ContextProvider>
        </ErrorBoundary>
    );
}

export default App;
