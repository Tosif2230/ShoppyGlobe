import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetchProduct(url) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const resp = await axios.get(url);
        // console.log(resp.data.products);
        setProducts(resp.data.products);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [url]);
  return { products, error, loading };
}

export default useFetchProduct;
