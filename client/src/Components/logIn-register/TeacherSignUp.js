import React from "react";
import "./formCSS.css";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^([a-z0-9][-a-z0-9_+.]*[a-z0-9])@([a-z0-9][-a-z0-9.]*[a-z0-9]\.(arpa|root|aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)|([0-9]{1,3}\.{3}[0-9]{1,3}))$/;

function TeacherSignUp() {
  const errRef = useRef();

  const [teacherNameReg, setTeacherNameReg] = useState("");

  const [teacherEmailReg, setTeacherEmailReg] = useState("");
  const [validTeacherEmailReg, setValidTeacherEmailReg] = useState(false);
  const [teacherEmailFocus, setTeacherEmailFocus] = useState(false);

  const [teacherPasswordReg, setTeacherPasswordReg] = useState("");
  const [validTeacherPasswordReg, setVaildTeacherPasswordReg] = useState(false);
  const [teacherPasswordFocus, setTeacherPasswordFocus] = useState(false);

  const [matchTeacherPassword, setMatchTeacherPassword] = useState("");
  const [validMatchTeacherPassword, setValidMatchTeacherPassword] =
    useState(false);
  const [matchTeacherPasswordFocus, setMatchTeacherPasswordFocus] =
    useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    console.log(teacherPasswordReg);
    setValidTeacherEmailReg(EMAIL_REGEX.test(teacherEmailReg));
    setVaildTeacherPasswordReg(PWD_REGEX.test(teacherPasswordReg));
    setValidMatchTeacherPassword(teacherPasswordReg === matchTeacherPassword);
  }, [teacherPasswordReg, teacherEmailReg, matchTeacherPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [teacherPasswordReg, teacherEmailReg, matchTeacherPassword]);

  const teachersSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/teacher-signup",
        {
          teacherName: teacherNameReg,
          teacherEmail: teacherEmailReg,
          teacherPassword: teacherPasswordReg,
        }
      );
      console.log(response);
      setSuccess(true);
      setTeacherEmailReg("");
      setTeacherNameReg("");
      setTeacherPasswordReg("");
      setMatchTeacherPassword("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Email is already in use.");
      }
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1 className="form-success">Successful Registration!</h1>
          <p className="form-para-success">Click login button to Login</p>
        </section>
      ) : (
        <section>
          <form className="sign-up-form" onSubmit={teachersSignUp}>
            <p ref={errRef} className={errMsg ? "errmsg" : "errmsg-hidden"}>
              {errMsg}
            </p>
            <input
              type="text"
              placeholder="Full Name"
              className="sign-up-input"
              autoComplete="off"
              required
              onChange={(e) => {
                setTeacherNameReg(e.target.value);
              }}
            />
            <FontAwesomeIcon
              icon={faCheck}
              className={validTeacherEmailReg ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={
                validTeacherEmailReg || !teacherEmailReg ? "hide" : "invalid"
              }
            />
            <input
              type="text"
              placeholder="Email Address"
              className="sign-up-input"
              autoComplete="off"
              required
              onChange={(e) => {
                setTeacherEmailReg(e.target.value);
              }}
              onFocus={() => setTeacherEmailFocus(true)}
              onBlur={() => setTeacherEmailFocus(false)}
            />
            <p
              className={
                teacherEmailFocus && !validTeacherEmailReg
                  ? "form-instructions"
                  : "hide"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Please enter valid email address.
              <br />
              Do not use capitals.
            </p>

            <FontAwesomeIcon
              icon={faCheck}
              className={validTeacherPasswordReg ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={
                validTeacherPasswordReg || !teacherPasswordReg
                  ? "hide"
                  : "invalid"
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="sign-up-input"
              required
              onChange={(e) => {
                setTeacherPasswordReg(e.target.value);
              }}
              onFocus={() => setTeacherPasswordFocus(true)}
              onBlur={() => setTeacherPasswordFocus(false)}
            />
            <p
              className={
                teacherPasswordFocus && !validTeacherPasswordReg
                  ? "form-instructions"
                  : "hide"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include one uppercase and one lowercase letters, one number
              and one special character.
              <br />
              Allowed special characters: ! @ $ # %
            </p>

            <FontAwesomeIcon
              icon={faCheck}
              className={
                validMatchTeacherPassword && matchTeacherPassword
                  ? "valid"
                  : "hide"
              }
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={
                validMatchTeacherPassword || !matchTeacherPassword
                  ? "hide"
                  : "invalid"
              }
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="sign-up-input"
              required
              onChange={(e) => {
                setMatchTeacherPassword(e.target.value);
              }}
              onFocus={() => setMatchTeacherPasswordFocus(true)}
              onBlur={() => setMatchTeacherPasswordFocus(false)}
            />
            <p
              className={
                matchTeacherPasswordFocus && !validMatchTeacherPassword
                  ? "form-instructions"
                  : "hide"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>
            <button
              className={
                !validTeacherPasswordReg || !validMatchTeacherPassword
                  ? "sign-up-btn-disabled"
                  : "sign-up-btn"
              }
              disabled={
                !validTeacherPasswordReg || !validMatchTeacherPassword
                  ? true
                  : false
              }
            >
              SIGN UP
            </button>
          </form>
        </section>
      )}
    </>
  );
}

export default TeacherSignUp;
