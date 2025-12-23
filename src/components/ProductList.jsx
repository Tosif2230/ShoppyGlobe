import React from "react";
import ProductItem from "./ProductItem";
import useFetchProduct from "../Hooks/useFetchProduct";

function ProductList() {
  const { product, error, loading } = useFetchProduct(
    "https://dummyjson.com/products"
  );
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center">Error in Loading..{error.message}</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-2">
          {product.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
  )
}

export default ProductList;
