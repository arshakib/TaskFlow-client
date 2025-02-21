import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Work from "./Work/Work.jsx";
import Context from "./Context/Context.jsx";
import Private from "./Private/Private.jsx";
import FontPage from "./Home/FontPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <FontPage />,
      },
      {
        path: "/dashboard",
        element: (
          <Private>
            <Work />
          </Private>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </StrictMode>
);
