import React from "react";
import "./formCSS.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useToken from "../../Helpers/useToken";

const TeacherLogin = () => {
  const [errMsg, setErrMsg] = useState("");

  const [teacherEmailLog, setTeacherEmailLog] = useState("");
  const [teacherPasswordLog, setTeacherPasswordLog] = useState("");

  const { setToken } = useToken();

  let navigate = useNavigate();

  useEffect(() => {
    setErrMsg("");
  }, [teacherEmailLog, teacherPasswordLog]);

  const teacherLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/teacher-login", {
        teacherEmail: teacherEmailLog,
        teacherPassword: teacherPasswordLog,
      });
      console.log(`${response.data}`);
      if (response.status === 200) {
        setToken(response.data);
        navigate("/teacher");
      }
    } catch (err) {
      console.log(err?.message);
      console.log(err.response.status);
      if (err.response.status === 400) {
        setErrMsg("Login failed. User does not exist.");
      }
      if (err.response.status === 401) {
        setErrMsg("Login failed. Password incorrect.");
      }
    }
  };

  return (
    <form className="log-in-form">
      <input
        type="text"
        placeholder="Email Address"
        className="log-in-input"
        onChange={(e) => {
          setTeacherEmailLog(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        className="log-in-input"
        onChange={(e) => {
          setTeacherPasswordLog(e.target.value);
        }}
      />
      <br />
      <p className={errMsg ? "errmsg" : "errmsg-hidden"}>{errMsg}</p>
      <button className="log-in-btn" onClick={teacherLogin}>
        Log In
      </button>
    </form>
  );
};

export default TeacherLogin;
