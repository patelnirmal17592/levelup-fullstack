import axios from "axios";
import React, { useEffect, useState } from "react";
// import banner from '../../Images/scratchbanner.png'
import './dashboard.css' 

function Instructions() {
  const [subjectData, setSubjectData] = useState("loading instructions data...");

  let ProjectId = 1
  useEffect(() => {
    axios.get(`http://localhost:4000/projects/${ProjectId}`)
    .then((res) => {
      console.log(res.data[0])
      setSubjectData(res.data[0].Instructions)
    })
  })

  return (
    <>
      <div dangerouslySetInnerHTML = {{__html: subjectData}}/>
    </>
  );
}

export default Instructions;
