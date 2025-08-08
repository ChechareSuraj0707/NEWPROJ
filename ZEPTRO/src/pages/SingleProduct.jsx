import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const SingleProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  console.log(params);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get("./Data.json"); // Fetch whole JSON
      const allProducts = res.product.products;
      setProduct(res.product.products);
      console.log("Data", product);
      // Find product by ID (make sure it's a number)
      //   const foundProduct = allProducts.find(
      //     (p) => p.id === parseInt(params.id)
      //   );

      //   if (foundProduct) {
      //     setProduct(foundProduct);
      //     console.log("Single product =>", foundProduct);
      //   } else {
      //     console.log("Product not found");
      //   }
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return;
  <div>SingleProduct</div>;
};

export default SingleProduct;
