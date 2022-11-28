import React, { useEffect, useState } from "react";
import "./HelpRequests.css";
import axios from "axios";
import doneIcon from "./img/Iconmaterialdone.png";
import replyIcon from "./img/Iconmaterialreply.png";
import useToken from "../../Helpers/useToken";



const HelpRequests = () => {
  const [helpRequest, setHelpRequest] = useState([]);
  const { token: teacher } = useToken();

  useEffect(() => {
    axios.get(`http://localhost:4000/help-request/${teacher.TeacherID}`).then((response) => {
      setHelpRequest(response.data);
      console.log(response.data);
    })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const reloadPage = () => {
    window.location.reload();   // refreshing the page after sending update to backend with const requestId 
  }

  return (
    <div className="sf-help-request-main-container">
      <div className="sf-help-request-title">
        <div className="sf-help-request-text">
          <h1>HELP REQUEST</h1>
        </div>
        <button className="sf-help-request-button">
          <img className="sf-help-request-image" src={replyIcon} alt="reply icon"></img> REPLY</button>
        <button className="sf-help-request-button" onClick={reloadPage}>
          <img className="sf-help-request-image" src={doneIcon} alt="done icon"></img> MARK AS DONE</button>
      </div>

      <div className="sf-help-request-scroll">
        <div className="sf-help-request-container">

          {helpRequest.map((help) => {

            const requestId = help.RequestID;

            const updateDb = () => {
        
              axios.post("http://localhost:4000/help-request/update",   // sending update to backend using axios post request. Making request with body paramenter and passing it as the second parameter to the function. 
              { requestId: requestId })

              .then(response => {
                console.log(response);
              })

              .catch(error => {
                console.log(error);
              })
            };

            return (
              <div key={help.RequestID} className="help-request-checkbox-wrap" >


                <input  type='checkbox' className="help-request-checkbox-button" // sending update to backend using axios post request with onClick
                key={help.RequestID}  onClick={(e) => updateDb(e)} />   


                <div className="sf-help-request-student-requests">
                  <img className="sf-help-request-pic"
                    src={`${help.ProfilePic}`} alt="profile-pic"></img>

                  <h4>{help.Name} {help.Message}</h4>

                  <div className="sf-date-time-container">
                    <p>Date request created:</p>
                    <p>{help.DateCreated}</p>
                  </div>

                </div>
              </div>
            );

          })}
        </div>
      </div>
    </div>
  );
};

export default HelpRequests;
