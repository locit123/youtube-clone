import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
