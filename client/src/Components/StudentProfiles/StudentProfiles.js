import React, { useEffect, useState } from "react";
import "./StudentProfiles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useToken from "../../Helpers/useToken";

const StudentProfiles = () => {
  const [students, setStudents] = useState([]);
  const { token: teacher } = useToken();

  let navigate = useNavigate("");

  const getStudents = async () => {
    const { data } = await axios.get(
      `http://localhost:4000/student-profile-view/teacher/${teacher.TeacherID}`
    );
    setStudents(data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="am-student-profile-main-container">
      <div className="am-student-scroll">
        <div className="am-student-profile-container">
          {students.map((student) => {
            return (
              <div
                key={student.StudentID}
                className="am-student-profiles"
                onClick={() => {
                  navigate("/student-profile-viewer");
                }}
              >
                <img
                  src={`${student.ProfilePic}`}
                  alt="avatar"
                  className="am-student-image"
                ></img>
                <h3>{student.Name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentProfiles;
