import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import type { JSX } from "react";

const Layout = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <Outlet />  
        </>
    )
}

export default Layout;