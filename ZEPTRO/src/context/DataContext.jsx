import axios from "axios";
import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  //fetching all products from api

  const fetchAllProducts = async () => {
    try {
      // const res = await axios.get(
      //   "https://dummyjson.com/products/category/smartphones"
      // );
      const res = await axios.get("./Data.json");
      setData(res.data.products);
      console.log("res-->", res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};
