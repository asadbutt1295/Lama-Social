import React from "react";
import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";




function Home() {
  return (
    <div>

      <Topbar />

      <div className="homeContainer">

      <Sidebar />

      <Feed />


      <Rightbar />

      </div>

    </div>
  );
}

export default Home;
