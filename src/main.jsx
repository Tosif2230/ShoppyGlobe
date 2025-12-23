import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Cart from "./components/Cart.jsx";

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
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/category/:categoryName",
        element: <ProductList />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
