import { registerUser } from "../api/api";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullname: "",
    contact_number: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        fullname: formData.fullname,
        contact_number: formData.contact_number,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };

      const data = await registerUser(userData);
      setMessage(data.message);

      setFormData({
        username: "",
        email: "",
        password: "",
        fullname: "",
        contact_number: "",
      });
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="min-h-screen flex  items-center justify-center ">
      <div className="bg-gray-100 lg:w-1/3 md:w-1/2 rounded-xl p-10 ">
        <h1 className="text-4xl font-bold mb-5 ">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullname}
            name="fullname"
            onChange={handleChange}
            required
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="+63 123 456 7890"
            value={formData.contact_number}
            name="contact_number"
            onChange={handleChange}
            required
            maxLength={11}
            className="input input-bordered w-full"
          />

          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            name="username"
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            required
            className="input input-bordered w-full "
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            required
            className="input input-bordered w-full "
          />
          {message && <p>{message}</p>}
          <button type="submit" className="btn btn-warning w-full ">
            Register
          </button>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
