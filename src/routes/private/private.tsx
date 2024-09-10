import React from 'react';
import {HocPrivate} from "./hoc.tsx";
import Layout from "@/layout/page.tsx";

function PrivateRouter() {
    return (

            // <HocPrivate>
                <Layout/>
            // </HocPrivate>

    );
}

export default PrivateRouter;
