import React from "react";
import Header from "../Components/header";
import Footer from "../Components/Footer";
import StudentProfileDisplay from "../Components/StudentProfileViewer/StudentProfileDisplay.jsx";

const StudentProfileViewer = () => {
  return (
    <>
      <Header></Header>
      <StudentProfileDisplay></StudentProfileDisplay>
      <Footer></Footer>
    </>
  );
};

export default StudentProfileViewer;
