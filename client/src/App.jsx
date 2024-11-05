import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./pages/admin/Dashboard";
import Register from "./components/Register";
import Users from "./pages/admin/Users";
import Products from "./pages/admin/Products";
import Order from "./pages/admin/Order";
import { AuthProvider } from "./context/AuthContext.js";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="/dashboard/users" element={<Users />} />
              <Route path="/dashboard/products" element={<Products />} />
              <Route path="/dashboard/orders" element={<Order />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
