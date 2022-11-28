import ProfileButton from "../ProfileButton/ProfileButton";
import "./ProfileSmallEditBox.css";
import { useState, useEffect } from "react";
import axios from "axios";
import FileStack from "../FileStack";
import useToken from "../../Helpers/useToken";

const ProfileSmallEditBox = () => {
  const { token: teacher } = useToken();

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
      {teachersPic.map((teacherPic) => {
        // console.log(teacherPic);
        return (
          <div key={teacherPic.TeacherID} className="small-edit-box-container">
            <img
              src={`${teacherPic.ProfilePic}`}
              className="small-edit-box-profile-pic"
              alt="profile pic"
            ></img>
            <br />
            <ProfileButton type="button" buttonStyle="btn-white-outlined">
              EDIT PROFILE
            </ProfileButton>
            <br />
            <FileStack type="button" buttonStyle="btn-white-outlined">
              CHANGE PHOTO
            </FileStack>
            <br />
            <ProfileButton type="button" buttonStyle="btn-white-outlined">
              SETTINGS
            </ProfileButton>
          </div>
        );
      })};
    </>
  );
};

export default ProfileSmallEditBox;
