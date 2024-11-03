import React from "react";
import { FaPesoSign } from "react-icons/fa6";

const AddProduct = () => {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-3">Add Product</h1>
      <hr />
      <form className="mt-3">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Product Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
          />
        </label>

        <div className="label mt-3">
          <span className="label-text">Category</span>
        </div>
        <select className="select select-bordered w-full">
          <option disabled selected>
            Please select a category
          </option>
          <option>Food</option>
          <option>Drinks</option>
        </select>

        <label className="form-control mt-3">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Type here"></textarea>
        </label>

        <div className="label mt-3">
          <span className="label-text">Price</span>
        </div>
        <label className="input input-bordered flex items-center gap-2">
          <FaPesoSign className="h-4 w-4 opacity-70" />
          <input type="number" className="grow" placeholder="0.00" />
        </label>

        <button className="btn btn-info w-full mt-3">Add</button>
      </form>
    </section>
  );
};

export default AddProduct;
