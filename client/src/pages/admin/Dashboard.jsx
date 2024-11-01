import React from "react";
import Sidenav from "./Sidenav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="flex flex-row">
      <Sidenav />
      <div style={{ paddingLeft: "300px", marginTop: "20px" }}>
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
