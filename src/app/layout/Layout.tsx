import { GlobalCalloutSection } from 'app/layout/component/GlobalCalloutSection';
import ScrollToTop from 'app/layout/ScrollToTop';
import { useCartContext } from 'entities/cart';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router';
import { Cart } from 'widgets/cart/ui/Cart';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';

export function Layout(): ReactNode {
    const { isCartOpened, hideCart } = useCartContext();
    return (
        <div
            className="flex h-full min-h-screen w-full flex-col bg-white"
            onClick={() => (isCartOpened ? hideCart() : null)}
        >
            <Header />
            <div className="relative min-h-screen flex-grow">
                <ScrollToTop />
                <Outlet />
                {isCartOpened && <Cart />}
            </div>
            <GlobalCalloutSection />
            <Footer />
        </div>
    );
}
