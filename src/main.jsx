import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import ProductDetails from "./Pages/ProductDetail.jsx";
import NotFound from "./Pages/NotFound.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },

    ],
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
