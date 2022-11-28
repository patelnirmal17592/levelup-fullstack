import axios from "axios";
import React, { useEffect, useState } from "react";

function SubjectData(props) {
  const { getProperty, propertyName } = props;

  const [subjectData, setSubjectData] = useState(
    `Loading ${propertyName} data...`
  );

  let ProjectID = 1;

  useEffect(() => {
    axios.get(`http://localhost:4000/projects/${ProjectID}`).then((res) => {
      console.log(res.data[0]);
      setSubjectData(getProperty(res.data[0]));
    });
  });

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: subjectData }} />
    </>
  );
}

export default SubjectData;
