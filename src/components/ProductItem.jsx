import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ProductItem = ({ product }) => {
  const { id, title, price, rating, images, description } = product;
  const dispatch = useDispatch();
  
  return (
    <div className="h-full">
      <div className="flex flex-col h-full rounded-xl p-4 shadow-sm">
        <Link to={`/product/${id}`}>
          <figure>
            <img className="h-48 w-full object-cover rounded-lg" src={images?.[0]} alt={title} loading="lazy" />
          </figure>
        </Link>

        <h2 className="mt-4 text-lg font-semibold">
          {title?.substring(0,25)}
        </h2>
        <p className="text-sm mt-1 text-gray-600 mb-3">{description?.substring(0,130)}</p>
        <p className="text-sm text-gray-600">Availability: {product.availabilityStatus}</p>

        <div className="flex justify-between items-center mb-4 mt-auto">
          <div className="flex items-center gap-1">
          <svg
            className="w-5 h-5 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <span>{rating}</span>
        </div>

        <p className="font-semibold">$ {price}</p>
        </div>

        <button
          type="button"
          onClick={() => dispatch(addItem(product))}
          className="mt-auto w-[50%] rounded-xl text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 text-sm"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
