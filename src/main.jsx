import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import { lazy, Suspense } from "react";

const ProductList = lazy(() => import("./components/ProductList.jsx"));
const ProductDetail = lazy(() => import("./Pages/ProductDetail.jsx"));
const Checkout = lazy(() => import("./Pages/Checkout.jsx"));
const NotFound = lazy(() => import("./Pages/NotFound.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));

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
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={routes} />
    </Suspense>
  </Provider>
);
