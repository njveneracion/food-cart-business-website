import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 8 },
    role: { type: String, enum: ["Admin", "Customer"], default: "Customer" },
    personal_information: [
      {
        fullname: { type: String, required: true },
        contact_number: { type: String, required: true },
      },
    ],
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
