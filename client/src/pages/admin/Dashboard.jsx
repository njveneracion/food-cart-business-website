import React from "react";
import Sidenav from "./Sidenav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="grid grid-cols-12 grid-rows-5">
      <div className="col-span-2 row-span-5">
        <Sidenav />
      </div>
      <div className="col-span-10 row-span-5 col-start-3 mt-5">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
