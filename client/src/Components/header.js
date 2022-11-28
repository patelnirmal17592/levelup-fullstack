import "../App.css";
import starLogoN from "../imagesAndSvgs/Star Logo 07-2.png";
import nzFlagN from "../imagesAndSvgs/NZ Flag.png";
import maoriFlagN from "../imagesAndSvgs/Maori flag.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useToken from "../Helpers/useToken";


// Below is the header been shared on diff pages that I had created!

const Header = () => {

  const {token: student} = useToken();
  const [hidden, setHidden] = useState(true);
  const [studentProfile, setStudentProfile] = useState([])

  useEffect(() => {
    if (!student) {return;}
    axios.get(`http://localhost:4000/student-profile/${student.StudentID}`)
    .then((res) => {
      const {data} = res;
      setStudentProfile(data);
    })
  }, [student])

  const handleShowMenu = (e) => {
    setHidden(false);
    if (hidden === false) {
      setHidden(true);
    }
  };

  const handleMouseOut = () => {
    setHidden(true);
  };

  return (
    <> 
    { studentProfile.map((data, index) => 
      <div className="headerContainerN" id="top" key={index}>
        <div className="contentContainerN">
          <div className="logoN">
            <a href="/">
              <img
                src={starLogoN}
                alt="star LevelUp Works logo"
                style={{ cursor: "pointer" }}
                key={index}
              ></img>
            </a>
          </div>

          <div className="navBarN">
            <a className="navbarLinkN" href="/">
              HOME
            </a>
            <a className="navbarLinkN" href="/student-project-library">
              PROJECTS
            </a>
            <a className="navbarLinkN" href="#teachers">
              TEACHERS
            </a>
          </div>

          <div className="langAndUserN">
            <div className="langBlockN">
              <p>LANG</p>
              <img src={nzFlagN} id="nzFlag" alt="NZ flag"></img>
              <img src={maoriFlagN} id="maoriFlag" alt="Maori flag"></img>
            </div>
            <div className="userBlockN">
              <div>
                <img
                  className="userImgN"
                  src={data.ProfilePic}
                  alt="UserImage"
                  key={index}
                ></img>
              </div>
              <div>
                <a className='studentNameN' href="#userProfile" onClick={handleShowMenu} key={index}>
                  {data.StudentName}
                </a>
                <div
                  className="userProfileN"
                  hidden={hidden}
                  onMouseLeave={handleMouseOut}
                >
                  <ul className="userProfileN-list">
                    <li>
                      <a href="/student-profile-viewer">My Profile</a>
                    </li>
                    <li>
                      <a href="/settings">Settings</a>
                    </li>
                    <li>
                      <a href="/logout">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Header;
