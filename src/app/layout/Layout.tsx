import type {ReactNode} from "react";
import {Header} from "widgets/header/ui";
import {Footer} from "widgets/footer/ui";
import {Outlet} from "react-router";


export function Layout (): ReactNode {
    return <div className="w-full h-full min-h-screen bg-peru-light">
        <Header/>
        <Outlet />
        <Footer/>
    </div>
}

