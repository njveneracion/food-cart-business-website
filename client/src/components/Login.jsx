import { useState } from "react";
import { loginUser } from "../api";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userData = { email, password };
      const data = await loginUser(userData);

      setMessage(data.message);
      // Optionally, you can save the token in local storage
      localStorage.setItem("token", data.token);

      navigate("../dashboard");
    } catch (error) {
      setMessage(error.response.data.message);
    }
  }
  return (
    <section>
      <h1 className="text-3xl mb-4 font-bold">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary w-full max-w-xs">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
};

export default Login;
