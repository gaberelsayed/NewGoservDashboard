import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import { ProductContext } from "../../../components/context/Product";

const ProductList = ({ onDelete, addNewProduct }) => {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className="product-flex">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onDelete={() => onDelete(index)}
            addNewProduct={addNewProduct}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
