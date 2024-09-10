import {lazy} from "react";
import {createBrowserRouter} from "react-router-dom";

const Auth = lazy(async () => await import("@/pages/auth"));

export const router = createBrowserRouter([
    {
        path: "/auth",
        element: <Auth/>,
    },
    // {
    //     path: "/",
    //     element: <PrivateRouter/>,
    //     children: [
    //         {
    //             index: true,
    //             element: <Main/>,
    //         },
    //         {
    //             path: "receipts",
    //             element: <Receipts/>,
    //         },
    //         {
    //             path: "report",
    //             element: <Report/>,
    //         },
    //         {
    //             path: "transactions",
    //             element: <Transactions/>,
    //         },
    //     ],
    // },
]);
