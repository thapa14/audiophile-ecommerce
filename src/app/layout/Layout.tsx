import type { ReactNode } from 'react';
import { Outlet } from 'react-router';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';

export function Layout(): ReactNode {
    return (
        <div className="bg-peru-light flex h-full min-h-screen w-full flex-col">
            <Header />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
