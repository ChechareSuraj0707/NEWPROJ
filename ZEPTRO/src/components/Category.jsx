import { useEffect, React } from "react";
import { getData } from "../context/DataContext";

const Category = () => {
  const { data, fetchAllProducts } = getData();
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const getUniqueCategory = (data, property) => {
    let newVAL = data?.map((curlElem) => {
      return curlElem[property];
    });
    newVAL = [...new Set(newVAL)];
    return newVAL;
  };

  const CatogeryOnlyData = getUniqueCategory(data, "category");
  console.log(CatogeryOnlyData);
  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex gap-4 items-center justify-around py-7 px-4">
        {CatogeryOnlyData.map((item, index) => {
          return (
            <div key={index}>
              <button className=" uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer ">
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
