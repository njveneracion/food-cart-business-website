import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div>
      Dashboard <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
