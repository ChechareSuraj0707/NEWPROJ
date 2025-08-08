/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  //fetching all products from api

  const fetchAllProducts = async () => {
    try {
      // const res = await axios.get(
      //   "https://dummyjson.com/products/category/smartphones"
      // );
      // const res = await axios.get(
      //   "https://fakestoreapi.in/api/products?limit=150"
      // );
      const res = await axios.get("./Data.json");
      setData(res.data.products);
      // console.log("res-->", res);
    } catch (error) {
      console.log(error);
    }
  };

  const getUniqueCategory = (data, property) => {
    let newVAL = data?.map((curlElem) => {
      return curlElem[property];
    });
    newVAL = ["All", ...new Set(newVAL)];
    return newVAL;
  };

  const CatogeryOnlyData = getUniqueCategory(data, "category");
  const BrandOnlyData = getUniqueCategory(data, "brand");
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        fetchAllProducts,
        CatogeryOnlyData,
        BrandOnlyData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getData = () => useContext(DataContext);
