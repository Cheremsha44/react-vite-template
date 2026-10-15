import { createBrowserRouter, Outlet } from "react-router-dom";
// Components
import Header from "../components/Header";
// Pages
import Home from "../pages/Home";

export default function RootLayout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            // { path: "cart", element: <Cart /> },
            // { path: "shop", element: <Shop /> },
        ],
    },
]);
