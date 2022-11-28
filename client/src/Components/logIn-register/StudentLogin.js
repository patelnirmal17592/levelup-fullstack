import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./formCSS.css";
import { useNavigate } from "react-router-dom";
import useToken from "../../Helpers/useToken";

const StudentLogin = () => {
  const [errMsg, setErrMsg] = useState("");

  const [studentEmailLog, setStudentEmailLog] = useState("");
  const [studentPasswordLog, setStudentPasswordLog] = useState("");
  const { setToken } = useToken();

  let navigate = useNavigate();

  useEffect(() => {
    setErrMsg("");
  }, [studentEmailLog, studentPasswordLog]);

  const studentLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/student-login", {
        studentEmail: studentEmailLog,
        studentPassword: studentPasswordLog,
      });
      console.log(response.data);

      if (response.status === 200) {
        setToken(response.data);

        navigate("/student-project-library");
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
          setStudentEmailLog(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        className="log-in-input"
        onChange={(e) => {
          setStudentPasswordLog(e.target.value);
        }}
      />
      <br />
      {/*Setting errmsg returned based upon err.response.status from line 40 & 43 */}
      <p className={errMsg ? "errmsg" : "errmsg-hidden"}>{errMsg}</p>
      <button className="log-in-btn" onClick={studentLogin}>
        Log In
      </button>
    </form>
  );
};

export default StudentLogin;
