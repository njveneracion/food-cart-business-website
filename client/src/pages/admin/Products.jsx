import React from "react";
import GetProduct from "./products/GetProduct";
import AddProduct from "./products/AddProduct";
import DeleteProduct from "./products/DeleteProduct";
import UpdateProduct from "./products/UpdateProduct";
import "./Product.css"; // Import your CSS file

const Products = () => {
  return (
    <section className="flex h-screen">
      <div className="w-3/4 overflow-y-auto pr-4">
        <h1 className="text-3xl font-semibold mb-4">Products</h1>
        <GetProduct />
      </div>

      <div className="w-1/4 fixed right-0 top-0 h-full bg-white shadow-lg p-4 overflow-scroll custom-scrollbar">
        <AddProduct />
        <hr />
      </div>
    </section>
  );
};

export default Products;
