import React from "react";
import useFetchProduct from "../Hooks/useFetchProduct";

function ProductItem() {
  const { product, error, loading } = useFetchProduct(
    "https://dummyjson.com/products"
  );

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center">Error in Loading..{error}</p>;
  }

  return (
    <div className="flex flex-wrap">
      {product.map((item) => (
        <div key={item.id} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={item.images[0]} alt="productImage" />
          </figure>
          <div className="card-body">
            <h1 className="card-title">{item.title}</h1>
            <p>{item.description}</p>
            <h1 className="card-rating">{item.rating}</h1>
            <h1 className="card-price">{item.price}</h1>
            <div className="card-actions justify-end">
              <button
                type="button"
                className="rounded-xl m-5 text-white bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductItem;
