import React from "react";
import { useParams } from "react-router-dom";
import useFetchProduct from "../Hooks/useFetchProduct";

function ProductDetail() {
  const { id } = useParams();
  const { product, error, loading } = useFetchProduct(
    `https://dummyjson.com/products/${id}`
  );
  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10">Error in Loading..{error.message}</p>;
  }
  console.log(product)
  return (
    <div className="flex gap-6 m-4 p-4 rounded-lg">
      {/* Image Section */}
      <figure className="w-1/3 flex justify-center shadow-sm">
        <img className="h-80 object-contain cursor-zoom-in" src={product.images?.[0]} alt={product.title} />
      </figure>

      {/* Title section */}
      <div className="w-1/2 shadow-lg">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p className="font-medium">Brand: {product.brand}</p>
        <p className="font-medium">Category: {product.category}</p>
        <p className="text-sm text-gray-600">Availability: {product.availabilityStatus}</p>

        {/*Rating*/}
        <div className="flex items-center gap-1 mt-2">
          <svg
            className="w-4 h-4 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <span className="text-sm">{product.rating}</span>
        </div>
        <hr className="text-gray-300 my-3" />
         <p className="text-sm mt-2 text-gray-700">{product.description}</p>
        <p className="text-sm mt-2 text-gray-700">{product.warrantyInformation}</p>
        <p className="text-xl font-semibold mt-3">Price: ${product.price}</p>
         <p className="text-sm text-green-600">
          Discount: {product.discountPercentage}%
        </p>
      </div>

      {/* Price section */}
      <div className="w-1/4 border border-gray-300 rounded-lg p-4 flex flex-col gap-3">
        <p className="text-xl font-semibold mx-2">Price: ${product.price}</p>
        <p className="text-xs mx-3 text-gray-600">{product.returnPolicy}</p>
        <p className="text-xs mx-3 text-gray-600">{product.shippingInformation}</p>

        <button
          type="button"
          className="m-1 p-1 cursor-pointer rounded-2xl text-sm text-white bg-cyan-500 hover:bg-cyan-600"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
