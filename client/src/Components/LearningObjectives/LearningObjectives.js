import React, { useEffect, useState } from "react";
import "./dashboard.css";
// import useToken from "../../Helpers/useToken";
import axios from "axios";

function LearningObjectives() {

  const [subjectData, setSubjectData] = useState("loading learning objective data...");
  // const {token: student} = useToken()

  let ProjectID = 1

  // to update the front end when we get the data from the backend 
  useEffect(() => {
    axios.get(`http://localhost:4000/projects/${ProjectID}`)
    .then((res) => {
      console.log(res.data[0])
      setSubjectData(res.data[0].LearningObject)
    })
  })

  return (
    <>
      <div dangerouslySetInnerHTML = {{__html: subjectData}}/>
    </>
  );
}

export default LearningObjectives;
