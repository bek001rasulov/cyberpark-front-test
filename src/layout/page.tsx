import {LayoutWrapper, Main} from "./style.ts";
import Navbar from "@/components/navbar/navbar.tsx";
import {Outlet} from "react-router-dom";

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
