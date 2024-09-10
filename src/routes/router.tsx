import {lazy} from "react";
import {createBrowserRouter} from "react-router-dom";
import PrivateRouter from "@/routes/private/private.tsx";

const Auth = lazy(async () => await import("@/pages/auth"));
const Products = lazy(async () => await import("@/pages/products"));
const Users = lazy(async () => await import("@/pages/users"));
const Posts = lazy(async () => await import("@/pages/posts"));
const Todos = lazy(async () => await import("@/pages/todos"));

export const router = createBrowserRouter([
    {
        path: "/auth",
        element: <Auth/>,
    },
    {
        path: "/",
        element: <PrivateRouter/>,
        children: [
            {
                index: true,
                element: <Products/>,
            },
            {
                path: "/users",
                element: <Users/>,
            },
            {
                path: "/posts",
                element: <Posts/>,
            },
            {
                path: "/todos",
                element: <Todos />,
            },
        ],
    },
]);
