import React, { useEffect, useState } from "react";
import ApiCalling from "./ApiCalling";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function calling() {
      const resp = await axios.get("https://dummyjson.com/products");
      // console.log(resp.data.products);
      setProducts(() => resp.data.products);
    }
    calling();
  }, []);

  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={product.images} alt="productImage" />
          </figure>
          <div className="card-body">
            <h1 className="card-title">{product.title}</h1>
            <p>{product.description}</p>
            <h1 className="card-rating">{product.rating}</h1>
            <h1 className="card-price">{product.price}</h1>
            <div className="card-actions justify-end">
              <button
                type="button"
                class="rounded-xl m-5 text-white bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
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

export default ProductList;
