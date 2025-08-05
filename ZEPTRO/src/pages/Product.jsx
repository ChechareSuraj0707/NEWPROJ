import React, { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import Loading from "../assets/Loading4.webm";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const { data, fetchAllProducts } = getData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    console.log(category);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
          <div className="flex gap-6">
            <FilterSection
              search={search}
              setSearch={setSearch}
              brand={brand}
              setBrand={setBrand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              category={category}
              setCategory={setCategory}
              handleCategoryChange={handleCategoryChange}
              handleBrandChange={handleBrandChange}
            />
            <div className="grid grid-cols-4 gap-7 mt-10">
              {data?.map((product, index) => {
                return <ProductCard key={index} product={product} />;
              })}
            </div>
          </div>
        ) : (
          <div className=" flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src={Loading} type="video/webm"></source>
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
