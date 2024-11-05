import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    fullname: { type: String, required: true },
    contact_number: { type: String, required: true, match: /^[0-9]{11}$/ },
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 8 },
    role: { type: String, enum: ["Admin", "Customer"], default: "Customer" },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

export default Product;
