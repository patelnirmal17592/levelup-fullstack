import React, { useState } from "react";
import ProfileButton from "../ProfileButton/ProfileButton";
// import '../HeroImage/HeroImage.css';
import "./Home.css";
import heroImage from "./img/happyStudents.png";
// import LoginRegister from '../logIn-register/LoginRegister';
import LoginRegister from "../logIn-register/LoginRegister";

function SignUpPanel() {
  const [openLoginModal, setOpenLoginModal] = useState(false);

  return (
    <>
      <div className="two-column">
        <img
          className="left-col"
          src={heroImage}
          alt="group of students learning"
        />
        <div className="right-col hero-text">
          <h1>What are you waiting for?</h1>
          <h4>Start teaching Digital Technologies todays.</h4>
          <p>
            If you need more information, we are happy to answer any questions
            you may have.
          </p>

          <div className="hero-btn">
            <ProfileButton type="button" buttonStyle="btn-white-outlined">
              ENQUIRE NOW
            </ProfileButton>
            <ProfileButton
              type="button"
              buttonStyle="btn-magenta-solid"
              onClick={() => {
                setOpenLoginModal(true);
              }}
            >
              SIGN UP
            </ProfileButton>
          </div>
        </div>
      </div>
      <div className="login-register">
        {openLoginModal && <LoginRegister closeModal={setOpenLoginModal} />}
      </div>
    </>
  );
}

export default SignUpPanel;
