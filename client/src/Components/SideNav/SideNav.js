import "./SideNav.css";
// import Avatar from "./Ellipse 38.png";
import React, { useState, useEffect } from "react";
import { menuItems } from "./MenuItems.js";
import { sideNavFooterItems } from "./SideNavFooterItems";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useToken from "../../Helpers/useToken";

const SideNav = () => {
  const [inactive, setInactive] = useState(false);
  let navigate = useNavigate();
  const { token: teacher } = useToken();

  const toggle = () => {
    setInactive(!inactive);
  };

  const [teachersPic, setTeachersPic] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/teacher/${teacher.TeacherID}`)
      .then((response) => {
        setTeachersPic(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div
        className={`am-side-nav-main-container ${inactive ? "inactive" : ""}`}
      >
        <div className="am-top-section">
          <>
            {teachersPic.map((teacherPic) => {
              return (
                <div key={teacherPic.TeacherID} className="am-profile-img">
                  <img
                    src={`${teacherPic.ProfilePic}`}
                    alt="avatar"
                    className="am-teacher-profile-img"
                  ></img>
                </div>
              );
            })}
          </>
          <div className="am-menu">
            {menuItems.map((items, index) => {
              return (
                <div
                  className={inactive ? "menu-items-center" : "menu-items"}
                  key={index}
                  onClick={() => navigate(items.url)}
                >
                  <>
                    <i
                      className={
                        inactive ? `${items.iconLarge}` : `${items.icon}`
                      }
                    ></i>
                    <p>
                      <span className={inactive ? "menu-item-hidden" : ""}>
                        {items.title}
                      </span>
                    </p>
                  </>
                </div>
              );
            })}
          </div>
        </div>
        <div className="spacer1"></div>
        <div onClick={toggle} className="toggle-nav-btn">
          <button className={inactive ? "hidden" : "arrow-left-btn"}>
            <i className={inactive ? "" : "bi bi-caret-left-fill"}></i>
          </button>
        </div>
        <div className="spacer2"></div>
        <div className="toggle-nav-lower-btn" onClick={toggle}>
          <button className={inactive ? "arrow-right-btn" : "hidden"}>
            <i className={inactive ? "bi bi-caret-right-fill" : ""}></i>
          </button>
        </div>
        <div
          className={
            inactive
              ? "nav-footer-items-container-center"
              : "nav-footer-items-container"
          }
        >
          {sideNavFooterItems.map((item, index) => {
            return (
              <div className={"nav-footer-items"} key={index}>
                <>
                  <i
                    className={inactive ? `${item.iconLarge}` : `${item.icon}`}
                    onClick={() => navigate(item.url)}
                  ></i>
                  <p>
                    <span className={inactive ? "nav-footer-item-hidden" : ""}>
                      {item.title}
                    </span>
                  </p>
                </>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideNav;
