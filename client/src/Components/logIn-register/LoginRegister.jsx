import React, { useState } from "react";
import studentImg from "./img/students.png";
import teacherImg from "./img/teachers.png";
import StudentSignUp from "./StudentSignUp";
import TeacherSignUp from "./TeacherSignUp";
import TeacherLogin from "./TeacherLogin";
import StudentLogin from "./StudentLogin";
import "./formCSS.css";

function LoginRegister({ closeModal }) {
  const [login, setLogin] = useState(false);
  // const [buttonActive, setButtonActive] = useState(false);

  // const isButtonActive = () => {
  //   setButtonActive(!buttonActive);
  // };

  const loginForm = () => {
    setLogin(true);
  };

  const signUpForm = () => {
    setLogin(false);
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="sign-up-flex-container">
          <div className="sign-up-student-container">
            <div className="student-image-title-container">
              <img
                src={studentImg}
                alt="students"
                className="sign-up-student-image"
              />
              <h1 className="sign-up-student-title">Students</h1>
            </div>
            <div className="login-signup-btn">
              <button
                className={`${
                  login
                    ? "student-mid-login-btn"
                    : "student-mid-login-btn-inactive"
                }`}
                onClick={loginForm}
              >
                LOG IN
              </button>
              <button
                className={`${
                  login
                    ? "student-mid-signup-btn-inactive"
                    : "student-mid-signup-btn"
                }`}
                onClick={signUpForm}
              >
                SIGN UP
              </button>
            </div>
            {login ? (
              <StudentLogin />
            ) : (
              <StudentSignUp className="student-sign-up-component" />
            )}
          </div>
          <div className="sign-up-teacher-container">
            <div className="teacher-image-title-container">
              <button type="button" className="close-sign-up">
                <i class="bi bi-x" onClick={() => closeModal(false)}></i>
              </button>
              <img
                src={teacherImg}
                alt="teachers"
                className="sign-up-teacher-image"
              />
              <h1 className="sign-up-teacher-title">Teachers</h1>
            </div>
            <div className="login-signup-btn">
              <button
                className={`${
                  login
                    ? "teacher-mid-login-btn"
                    : "teacher-mid-login-btn-inactive"
                }`}
                onClick={loginForm}
              >
                LOG IN
              </button>
              <button
                className={`${
                  login
                    ? "teacher-mid-signup-btn-inactive"
                    : "teacher-mid-signup-btn"
                }`}
                onClick={signUpForm}
              >
                SIGN UP
              </button>
            </div>
            {login ? (
              <TeacherLogin />
            ) : (
              <TeacherSignUp className="teacher-sign-up-component" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
