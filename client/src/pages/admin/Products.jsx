import React, { useState } from "react";
import GetProduct from "./products/GetProduct";
import AddProduct from "./products/AddProduct";
import DeleteProduct from "./products/DeleteProduct";
import UpdateProduct from "./products/UpdateProduct";

const Products = () => {
  const [addProduct, setAddProduct] = useState(false);

  const handleClick = () => {
    setAddProduct(true);
  };
  return (
    <section>
      <h1 className="font-bold text-3xl">Products</h1>
      <button onClick={handleClick} className="btn btn-info mb-3">
        Add Product
      </button>
      {addProduct ? <AddProduct /> : ""}
    </section>
  );
};

export default Products;
