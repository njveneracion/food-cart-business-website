import { useState } from "react";
import { loginUser } from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import { MdFastfood } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userData = { email: email, password: password };
      const data = await loginUser(userData);

      if (data.user._id) {
        const user = JSON.stringify(data.user);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", user);
        console.log("logged in successfully");
        navigate("../dashboard");
      }
    } catch (error) {
      setMessage(error.response.data.message);
    }
  }
  return (
    <section className="min-h-screen flex  items-center justify-center ">
      <div className="bg-gray-100 lg:w-1/3 md:w-1/2 rounded-xl p-10 ">
        <div className="flex flex-col items-center ">
          <Link to="/">
            <MdFastfood className="text-9xl mb-5 text-warning" />
          </Link>
          <h1 className="text-3xl mb-5 font-bold text-gray-800">
            Login to VFood
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="input input-bordered flex items-center gap-2">
            <FaUser fill="currentColor" className="h-4 w-4 opacity-50" />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="grow"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <FaKey fill="currentColor" className="h-4 w-4 opacity-50" />
            <input
              type="password"
              placeholder="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="grow"
            />
          </label>
          <button type="submit" className="btn btn-warning w-full">
            Login
          </button>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </p>
        </form>
        {message && <p className="text-center text-red-600">{message}</p>}
      </div>
    </section>
  );
};

export default Login;
