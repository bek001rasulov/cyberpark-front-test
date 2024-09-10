import {LayoutWrapper} from "./style.ts";
import Navbar from "@/components/navbar/navbar.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <LayoutWrapper>
            <Navbar/>
            <Outlet/>
        </LayoutWrapper>
    );
};

export default Layout;
