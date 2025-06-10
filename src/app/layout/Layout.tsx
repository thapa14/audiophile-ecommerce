import { GlobalCalloutSection } from 'app/layout/component/GlobalCalloutSection';
import ScrollToTop from 'app/layout/ScrollToTop';
import { useCart } from 'entities/cart/modal';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';

export function Layout(): ReactNode {
    const { isCartOpened, hideCart } = useCart();
    return (
        <div
            className="flex h-full min-h-screen w-full flex-col bg-white"
            onClick={() => (isCartOpened ? hideCart() : null)}
        >
            <Header />
            <div className="relative min-h-screen flex-grow">
                <ScrollToTop />
                <Outlet />
                {isCartOpened && (
                    <div className="fixed inset-0 top-[90px] z-50 bg-black/50 backdrop-opacity-50">
                        {/* Stop propagation to prevent triggering onClickOutside when clicking the child */}
                        <div className="container flex h-full w-full justify-end pt-10">
                            <div
                                className="h-50 w-50 bg-white"
                                onClick={e => e.stopPropagation()}
                            ></div>
                        </div>
                    </div>
                )}
            </div>
            <GlobalCalloutSection />
            <Footer />
        </div>
    );
}
