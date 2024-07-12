import React, { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";

const ProductContext = createContext();

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_PRODUCTS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
    try {
      const response = await axios.get("http://localhost:3001/products");
      dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
