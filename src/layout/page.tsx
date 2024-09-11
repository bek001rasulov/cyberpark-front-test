import {LayoutWrapper, Main} from "./style.ts";
import {Outlet} from "react-router-dom";
import Navbar from "@/components/navbar/navbar.tsx";

const Layout = () => {
    return (
        <LayoutWrapper>
            <Navbar/>
            <Main>
                <Outlet/>
            </Main>
        </LayoutWrapper>
    );
};

export default Layout;
