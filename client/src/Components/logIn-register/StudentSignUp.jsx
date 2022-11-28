import axios from "axios";
import "./formCSS.css";
import { useState, useEffect, useRef } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Regex statements to check email and passwords
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^([a-z0-9][-a-z0-9_+.]*[a-z0-9])@([a-z0-9][-a-z0-9.]*[a-z0-9]\.(arpa|root|aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)|([0-9]{1,3}\.{3}[0-9]{1,3}))$/;

function StudentSignUp() {
  const errRef = useRef();

  const [studentNameReg, setStudentNameReg] = useState("");

  const [studentEmailReg, setStudentEmailReg] = useState("");
  const [validStudentEmailReg, setValidStudentEmailReg] = useState(false);
  const [studentEmailFocus, setStudentEmailFocus] = useState(false);

  const [studentPasswordReg, setStudentPasswordReg] = useState("");
  const [validStudentPasswordReg, setValidStudentPasswordReg] = useState(false);
  const [studentPasswordFocus, setStudentPasswordFocus] = useState(false);

  const [matchStudentPassword, setMatchStudentPassword] = useState("");
  const [validMatchStudentPassword, setValidMatchStudentPassword] =
    useState(false);
  const [matchStudentPasswordFocus, setMatchStudentPasswordFocus] =
    useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //checking both password and confirm password match.
  useEffect(() => {
    setValidStudentEmailReg(EMAIL_REGEX.test(studentEmailReg));
    setValidStudentPasswordReg(PWD_REGEX.test(studentPasswordReg));
    setValidMatchStudentPassword(studentPasswordReg === matchStudentPassword);
  }, [studentPasswordReg, studentEmailReg, matchStudentPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [studentPasswordReg, studentEmailReg, matchStudentPassword]);

  const studentsSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/student-signup",
        {
          studentName: studentNameReg,
          studentEmail: studentEmailReg,
          studentPassword: studentPasswordReg,
        }
      );
      console.log(response);
      setSuccess(true);
      setStudentEmailReg("");
      setStudentPasswordReg("");
      setStudentNameReg("");
      setMatchStudentPassword("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Email already in use.");
      }
    }
  };

  return (
    <>
      {/*Conditionally rendering based upon if registration is successful or not */}
      {success ? (
        <section>
          <h1 className="form-success">Successful Registration!</h1>
          <p className="form-para-success">Click login button to Login</p>
        </section>
      ) : (
        <section>
          <form className="sign-up-form" onSubmit={studentsSignUp}>
            <p ref={errRef} className={errMsg ? "errmsg" : "errmsg-hidden"}>
              {errMsg}
            </p>
            <input
              className="sign-up-input"
              type="text"
              placeholder="Full Name"
              required
              onChange={(e) => {
                setStudentNameReg(e.target.value);
              }}
            />
            <FontAwesomeIcon
              icon={faCheck}
              className={validStudentEmailReg ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={
                validStudentEmailReg || !studentEmailReg ? "hide" : "invalid"
              }
            />
            <input
              className="sign-up-input"
              type="text"
              placeholder="Email Address"
              required
              onChange={(e) => {
                setStudentEmailReg(e.target.value);
              }}
              onFocus={() => setStudentEmailFocus(true)}
              onBlur={() => setStudentEmailFocus(false)}
            />
            <p
              className={
                studentEmailFocus && !validStudentEmailReg
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
              className={validStudentPasswordReg ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={
                validStudentPasswordReg || !studentPasswordReg
                  ? "hide"
                  : "invalid"
              }
            />
            <input
              className="sign-up-input"
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setStudentPasswordReg(e.target.value);
              }}
              onFocus={() => setStudentPasswordFocus(true)}
              onBlur={() => setStudentPasswordFocus(false)}
            />
            <p
              className={
                studentPasswordFocus && !validStudentPasswordReg
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
                validMatchStudentPassword && matchStudentPassword
                  ? "valid"
                  : "hide"
              }
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={
                validMatchStudentPassword || !matchStudentPassword
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
                setMatchStudentPassword(e.target.value);
              }}
              onFocus={() => setMatchStudentPasswordFocus(true)}
              onBlur={() => setMatchStudentPasswordFocus(false)}
            />
            <p
              className={
                matchStudentPasswordFocus && !validMatchStudentPassword
                  ? "form-instructions"
                  : "hide"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>
            <button
              className={
                !validStudentPasswordReg || !validMatchStudentPassword
                  ? "sign-up-btn-disabled"
                  : "sign-up-btn"
              }
              disabled={
                !validStudentPasswordReg || !validMatchStudentPassword
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

export default StudentSignUp;
