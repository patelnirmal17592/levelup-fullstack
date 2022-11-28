import "./ProgressTracker.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import useToken from "../../Helpers/useToken";

const ProgressTracker = () => {
  const [projects, setProjects] = useState([]);
  //Token to login to website.
  const { token: teacher } = useToken();

  //get Data from the backend with teacher ID.
  const getProjects = async () => {
    const { data } = await axios.get(
      `http://localhost:4000/progress-tracker/${teacher.TeacherID}`
    );
    setProjects(data);
  };

  const handleExport = () => {
    //NPM Package XLSX to export JSON as Excel spread.
    const wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(projects);

    XLSX.utils.book_append_sheet(wb, ws, "StudentProgress");

    XLSX.writeFile(wb, "student-progress.xlsx");
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <div className="am-progress-tracker-main-container">
        <div className="am-heading-container">
          <div className="am-title-container">
            <h1 className="beginner">BEGINNER COURSE</h1>
            <h3 className="bi bi-filetype-xls export" onClick={handleExport}>
              {" "}
              EXPORT AS SPREADSHEET
            </h3>
          </div>
        </div>

        <div className="scroll">
          {/*Mapping over data returned from DB to render out information */}
          <div className="am-student-project-completion">
            {projects.map((student, i) => {
              return (
                <div className="am-student-container-main" key={i + 1}>
                  <div className="am-student-name-container" key={i + 2}>
                    <h3 className="am-student-name" key={i + 3}>
                      {student.Name}
                    </h3>

                    <p className="am-projects-completed" key={i + 4}>
                      {`${student.noOfCompletedProjects}/15 Projects Completed`}
                    </p>
                  </div>
                  <div className="am-numbers-container">
                    {student.ProjectList.map((project, i) => {
                      return project.DateCompleted !== null ? (
                        <div className="am-circles green numbers" key={i}>
                          {project.ProjectID}
                        </div>
                      ) : (
                        <div className="am-circles numbers" key={i}>
                          {project.ProjectID}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressTracker;
