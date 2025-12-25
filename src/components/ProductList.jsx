import React from "react";
import ProductItem from "./ProductItem";
import useFetchProduct from "../Hooks/useFetchProduct";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductList() {
  const {categoryName} = useParams()
  const searchQuary = useSelector((store)=>store.search.quary);

  //fetch Products by Hooks
  const { product, error, loading } = useFetchProduct(
    "https://dummyjson.com/products"
  );

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }
  
  if (error) {
    return <p className="text-center">Error in Loading..{error.message}</p>;
  }

  let filteredProducts = product.products;

  // Use for Category Filter
  if (categoryName){
    filteredProducts = filteredProducts.filter((item) => item.category === categoryName)
  }
  // Use for Search Filter
  if (searchQuary){
    filteredProducts = filteredProducts.filter((item) => item.title.toLowerCase().includes(searchQuary)
    );
  }
  //  No product found
  if (filteredProducts.length === 0) {
    return <p className="text-center">No Product Found</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-2">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
  )
}

export default ProductList;
