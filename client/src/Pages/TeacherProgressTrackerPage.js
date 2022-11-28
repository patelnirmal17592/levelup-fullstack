import React from "react";
import LevelUpFooter from "../Components/LevelUpFooter/LevelUpFooter.js";
import TopNavBar from "../Components/TopNavBar/TopNavBar.js";
import SideNav from "../Components/SideNav/SideNav.js";
import "./TeacherProgress.css";
import { Outlet } from "react-router-dom";

function TeacherProgressTrackerPage() {
  return (
    <div className="am-TeacherProgressTrackerPage">
      <TopNavBar />
      <SideNav />
      <div className="am-progress-main-container">
        <Outlet />
      </div>
      <LevelUpFooter />
    </div>
  );
}

export default TeacherProgressTrackerPage;
