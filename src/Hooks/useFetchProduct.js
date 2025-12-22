import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetchProduct(url) {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fatchProduct() {
      try {
        const resp = await axios.get(url);
        setProduct(resp.data.products);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fatchProduct();
  }, [url]);
  return { product, error, loading };
}

export default useFetchProduct;
