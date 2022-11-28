import React from "react";
import "../Components/LearningObjectives/dashboard.css";
import ObjectivesNav from "../Components/LearningObjectives/ObjectivesNav";
import LevelUpFooter from "../Components/LevelUpFooter/LevelUpFooter";
import TopNavBar from "../Components/TopNavBar/TopNavBar";
import { Outlet } from "react-router-dom";
import Header from "../Components/header";

export default function StudentBuilderDashboard() {
  return (
    <div className="student-dashboard">
      <TopNavBar />
      {/* <Header/> */}
      <div className="dashboard">
        <div className="objectives-nav">
          <ObjectivesNav />
        </div>
        <div className="inner-container ">
          <Outlet />
        </div>
      </div>

      <LevelUpFooter />
    </div>
  );
}
