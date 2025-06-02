import type { ReactNode } from 'react';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
import { Outlet } from 'react-router';

export function Layout(): ReactNode {
    return (
        <div className="bg-peru-light relative h-full min-h-screen w-full">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
