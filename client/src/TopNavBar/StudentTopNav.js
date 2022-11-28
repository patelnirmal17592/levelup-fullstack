import "../Components/LearningObjectives/dashboard.css";
import Projects from './Projects'
//import images
import MaoriFlag from "../Images/Maori-flag.png";
import NZFlag from "../Images/NZ Flag.png";
import Logo from "../Images/Star Logo 07-3.png";
//import JS array/object file
import { buttonItems } from "./ButtonItems.js";
import { Link } from "react-router-dom";
// import LearningObjectives from "../Components/LearningObjectives/LearningObjectives";

const StudentTopNav = () => {
  return (
    <>
      <nav>
        <div className="left-div">
          <div className="logo-container">
            <Link to="/"><img src={Logo} alt="Star Logo" className="logo"></img></Link> 
            <Projects />
          </div>
        </div>
        <div className="right-div">
          <div className="button-container">
            {buttonItems.map((item, index) => {
              return (
                <button href={item.url} key={index} className={item.cName}>
                  {" "}
                  {item.title}
                </button>
              );
            })}
          </div>

          <div className="flag-container">
            <img src={NZFlag} alt="NZ Flag"></img>
            <img src={MaoriFlag} alt="Maori Flag"></img>
          </div>
        </div>
      </nav>
    </>
  );
};

export default StudentTopNav;
