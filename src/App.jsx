import { RouterProvider } from "react-router-dom";
// Styles
import "./App.css";
// Routers
import { router } from "./routes/routes";

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
