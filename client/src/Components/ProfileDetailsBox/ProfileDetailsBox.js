import React from "react";
import "./ProfileDetailsBox.css";
import { useState, useEffect } from "react";
import axios from "axios";
import useToken from "../../Helpers/useToken";

const ProfileDetailsBox = () => {
  const { token: teacher } = useToken();
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/teacher/${teacher.TeacherID}`)
      .then((response) => {
        setTeachers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // mapping through the info from the teacher table in the Database

  return (
    <div className="teacher-profile-detail-box-background"> 
      {teachers.map((teacher) => {
        return (
          <div key={teacher.TeacherID}>
            <div className="teacher-profile-detail-box-name-title">
              <h1> {teacher.Name} </h1>
            </div>

            <div className="teacher-profile-detail-box-columns">
              <p> School </p>
              <p style={{ fontWeight: "bold" }}>{teacher.School}</p>
            </div>

            <div className="teacher-profile-detail-box-columns">
              <p> Date of Birth </p>
              <p style={{ fontWeight: "bold" }}>{teacher.BirthDate}</p>
            </div>

            <div className="teacher-profile-detail-box-columns">
              <p> Contact No </p>
              <p style={{ fontWeight: "bold" }}>{teacher.ContactNumber}</p>
            </div>

            <div className="teacher-profile-detail-box-columns">
              <p> Email Address </p>
              <p style={{ fontWeight: "bold" }}>{teacher.Email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileDetailsBox;
