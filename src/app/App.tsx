import 'shared/tailwind-configs/index.css';
import ContextProvider from 'app/providers/Providers';
import routers from 'app/routers';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router';
import { useEffect } from 'react';
import { preloadHeroImages, preloadCategoryImages } from 'shared/lib/imagePreloader';

function App() {
    useEffect(() => {
        // Preload critical images on app start
        preloadHeroImages();
        
        // Preload category images with slight delay
        const timer = setTimeout(() => {
            preloadCategoryImages();
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
            <ContextProvider>
                <RouterProvider router={routers} />
            </ContextProvider>
        </ErrorBoundary>
    );
}

export default App;
