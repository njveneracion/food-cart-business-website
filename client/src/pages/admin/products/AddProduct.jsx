import React from "react";

const AddProduct = () => {
  return (
    <section>
      <form className="border-2 p-5 rounded-2xl">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Product Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <div className="label">
          <span className="label-text">Category</span>
        </div>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Please select a category
          </option>
          <option>Food</option>
          <option>Drinks</option>
        </select>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Type here"></textarea>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Product Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <button className="btn btn-info w-full mt-3">Add</button>
      </form>
    </section>
  );
};

export default AddProduct;
