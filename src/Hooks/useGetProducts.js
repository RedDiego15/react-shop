import React from 'react'
import axios from 'axios';



const useGetProducts = (limit) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorGetProducts, setErrorGetProducts] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const API = `https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=2`;

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios(API);
        setProducts(response.data);
      } catch (error) {
        console.log("error get products");
        setErrorGetProducts(false);
      }
    }
    fetchData();
    setIsLoading(false);
    setErrorGetProducts(false);
  }, []);

  return {
    products: products,
    isLoading: isLoading,
    errorGetProducts: errorGetProducts,
  };
};

export {useGetProducts}