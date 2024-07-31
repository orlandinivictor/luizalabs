import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Wishlist } from "./pages/Wishlist/index.tsx";

import { GlobalStyle } from "./styles.ts";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
