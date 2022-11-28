import React from "react";
import "./StudentProfileDisplay.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import FileStack from "./FileStackN";
import useToken from "../../Helpers/useToken";

const StudentProfileDisplay = () => {
  const [studentdata, setStudentdata] = useState([]);             //  sets student data coming from server
  const [editable, setEditable] = useState(false);                //  makes fields editable on button click
  const [buttonText, setButtonText] = useState("EDIT PROFILE");   //  changes button text on click
  const [serverResponse, setServerResponse] = useState();         //  sets server response to show a popup
  const [messageVisible, setMessageVisible] = useState("hidden"); //  toggle server message based on condition
  const { token: student } = useToken();                          //  keeps student data live across different pages

//  this axios makes GET request to get particular student info
  useEffect(() => {
    axios
      .get(`http://localhost:4000/student-profile/${student.StudentID}`)
      .then((res) => {
        const { data } = res;
        setStudentdata(data);
      });
  }, [student]);

  // Below function handles texts input by user and prepare new object to send for PUT request

  const handleChanges = (e) => {
    // console.log(e.target.innerText)

    switch (e.target.id) {
      case "SchoolN":
        studentdata[0].School = e.target.innerText;
        // console.log(updatedValues)
        break;
      case "CourseN":
        studentdata[0].Course = e.target.innerText;
        break;
      case "DateOfBirthN":
        studentdata[0].DateOfBirth = e.target.innerText;
        break;
      case "ContactNumberN":
        studentdata[0].ContactNumber = e.target.innerText;
        break;
      default:
        return studentdata;
    }
    return studentdata;
  };

  // below function handles button state and sends request on save changes

  const handleEditer = () => {
    if (editable === false) {
      setButtonText("💾 SAVE CHANGES");
      setEditable(true);
    }
    if (editable === true) {
      console.log(studentdata);
      setButtonText("EDIT PROFILE");
      setEditable(false);
      axios
        .put(
          `http://localhost:4000/student-profile/update/${student.StudentID}`,
          studentdata[0]
        )
        .then((res) => setServerResponse(res.data))
        .catch((err) => console.log(err.code, err.message));
    }
  };

  // below useEffect keeps track of server response coming in to display alert message

  useEffect(() => {
    if (serverResponse) {
      window.localStorage.setItem("message", `${serverResponse}`);
      setMessageVisible("visible");
      setTimeout(() => {
        setMessageVisible("hidden");
        window.localStorage.clear();
      }, 3000);
    }
  }, [serverResponse]);

  // below is the mapping on student data coming from server

  return studentdata.map((data, index) => (
    <div className="profileDisplayContainerN" key={index}>
      <div className="serverMessageN">
        <p className="serverResN" style={{ visibility: `${messageVisible}` }}>
          {window.localStorage.getItem("message")}
        </p>
      </div>
      <div className="displayContentContainerN">
        <div className="editProfileDivN">
          <img src={data.ProfilePic} alt="img not found" key={index}></img>
          <button
            onClick={(e) => handleEditer(e)}
            className={
              editable === true
                ? "editProfileDivN activeEditN"
                : "editProfileDivN button"
            }
          >
            {buttonText}
          </button>
          <FileStack studentId={student.StudentID}></FileStack>
        </div>
        <div className="profileContentDivN">
          <h1>{data.StudentName}</h1>
          <div className={editable? 'alertMessageN' : 'hiddenMessageN'}>
            <p>⚠ You are only allowed to make changes in highlighted fields.</p>
          </div>
          <div className="contentDividerN">
            <table className="contentTableN">
              <thead></thead>
              <tbody>
                <tr>
                  <td>School</td>
                  <td
                    contentEditable={editable}
                    suppressContentEditableWarning={true}
                    onInput={handleChanges}
                    id="SchoolN"
                  >
                    {data.School}
                  </td>
                </tr>
                <tr>
                  <td>Teacher</td>
                  <td>{data.TeacherName}</td>
                </tr>
                <tr>
                  <td>Course</td>
                  <td
                    contentEditable={editable}
                    suppressContentEditableWarning={true}
                    onInput={handleChanges}
                    id="CourseN"
                  >
                    {data.Course}
                  </td>
                </tr>
                <tr>
                  <td>Date of birth</td>
                  <td
                    contentEditable={editable}
                    suppressContentEditableWarning={true}
                    onInput={handleChanges}
                    id="DateOfBirthN"
                  >
                    {data.DateOfBirth}
                  </td>
                </tr>
                <tr>
                  <td>Contact No</td>
                  <td
                    contentEditable={editable}
                    suppressContentEditableWarning={true}
                    onInput={handleChanges}
                    id="ContactNumberN"
                  >
                    {data.ContactNumber}
                  </td>
                </tr>
                <tr>
                  <td>Email Address</td>
                  <td>{data.Email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default StudentProfileDisplay;
