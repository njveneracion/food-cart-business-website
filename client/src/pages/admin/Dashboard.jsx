import React from "react";
import Sidenav from "./Sidenav";
import Content from "./Content";

const Dashboard = () => {
  return (
    <section className="flex flex-row">
      <Sidenav />
      <div style={{ paddingLeft: "300px" }}>
        <Content />
      </div>
    </section>
  );
};

export default Dashboard;
