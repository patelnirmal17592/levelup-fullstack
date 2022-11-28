import React, { useState } from "react";
import "../Components/LearningObjectives/dashboard.css";

export default function Projects() {
  const [incative, setInactive] = useState("");

  const toggle = () => {
    setInactive((incative) => !incative);
  };

  return (
    <>
    <div className="student-projects">
      <div className="project-title">
        <h4>Project</h4>
        <h6>Introduction</h6>
      </div>
      <div className="student-project-circles">
        <div className={incative ? "project-active" : "project-circle"}>
          <span className="project-active"></span>
          <span className="project-circle"></span>
        </div>
      </div>
      </div>
    </>
  );
}
