import { registerUser } from "../api/api";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { username, email, password };
      const data = await registerUser(userData);
      setMessage(data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <section className="min-h-screen flex  items-center justify-center ">
      <div className="bg-gray-100 lg:w-1/3 md:w-1/2 rounded-xl p-10 ">
        <h1 className="text-4xl font-bold mb-5 ">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input input-bordered w-full "
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
