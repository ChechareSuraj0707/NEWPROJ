import { React } from "react";
import { getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  // const { CatogeryOnlyData } = getData();
  const navigate = useNavigate();
  const { data } = getData();

  const getUniqueCategory = (data, property) => {
    let newVAL = data?.map((curlElem) => {
      return curlElem[property];
    });
    newVAL = [...new Set(newVAL)];
    return newVAL;
  };

  const CatogeryOnlyData = getUniqueCategory(data, "category");
  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4">
        {CatogeryOnlyData?.map((item, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => navigate(`./category/${item}`)}
                className=" uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer "
              >
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
