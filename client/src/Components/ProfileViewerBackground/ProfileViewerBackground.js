import React from 'react'
import ProfileSmallEditBox from '../ProfileSmallEditBox/ProfileSmallEditBox';
import "./TeacherProfileViewerBackground.css";
import ProfileDetailsBox from '../ProfileDetailsBox/ProfileDetailsBox';
import ProfileButton from '../ProfileButton/ProfileButton';
import { Link } from 'react-router-dom';

const ProfileViewerBackground = () => {
  return (
    <>
      <div className='teacher-profile-viewer-background'>
        <div className='teacher-profile-viewer-container'>
        <ProfileSmallEditBox></ProfileSmallEditBox>

        <div className="teacher-profile-viewer-buttons-and-box">
          <ProfileDetailsBox></ProfileDetailsBox>
        
          <div className="teacher-profile-viewer-btn-style">
          <Link to="/teacher-project-library"><ProfileButton
              type="button" buttonStyle="btn-magenta-solid">
              BACK TO PROJECTS</ProfileButton></Link>

              <Link to="/teacher"><ProfileButton
              type="button" buttonStyle="btn-mustard-solid">
              BACK TO DASHBOARD</ProfileButton></Link>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileViewerBackground