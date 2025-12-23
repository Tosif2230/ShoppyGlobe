import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetchProduct(url) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      setError(null);
      try {
        const resp = await axios.get(url);
        // console.log(resp.data);
        setProduct(resp.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [url]);
  return { product, error, loading };
}

export default useFetchProduct;
