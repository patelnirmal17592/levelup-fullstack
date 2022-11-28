import { useEffect, useState } from "react";
import { PickerOverlay } from "filestack-react-18";
import axios from "axios";
import "./StudentProfileDisplay.css";

// below function handles profile picture uploads and alerts user if its updated successfully

const FileStack = ({ studentId }) => {
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);  //handles overlay of upload function
  const [imageUrl, setImageUrl] = useState();                                   //tracks image URL
  const [serverResponse, setServerResponse] = useState();                       //tracks response coming from server
  const [messageVisible, setMessageVisible] = useState("hidden");               //sets message visibility

  //About using environment variables in react => https://create-react-app.dev/docs/adding-custom-environment-variables/
  const FILESTACK_API_KEY =
    process.env.REACT_APP_FILESTACK_API_KEY || "AeSGzUcmNRu6yy5ajvGJKz";

  const handleVisible = (e) => {
    if (e.target.onclick) {
      setIsPickerOverlayVisible(!isPickerOverlayVisible);
    } else if (isPickerOverlayVisible === true) {
      setIsPickerOverlayVisible(isPickerOverlayVisible)
    }
  };

  const postingNewPicture = async () => {
    const updating = await axios
      .put(`http://localhost:4000/student-profile-picture/${studentId}`, {
        imageUrl,
      })
      .then((res) => {
        setServerResponse(res.data);
      })
      .catch((err) => console.log(err.code, err.message));
    console.log(updating);
  };

  useEffect(() => {
    if (imageUrl !== undefined) {
      postingNewPicture();
    }
  });

  useEffect(() => {
    if (serverResponse) {
      window.localStorage.setItem('message', `${serverResponse}`)
      setMessageVisible("visible");
      setTimeout(() => {
      setMessageVisible("hidden");
      window.location.reload()
    }, 2000);
    }
  },[serverResponse]);



  return (
    <>
      <button onClick={(e) => handleVisible(e)}>CHANGE PHOTO</button>
      <div>
        {isPickerOverlayVisible && (
          <PickerOverlay
            apikey={FILESTACK_API_KEY}
            onSuccess={(result) => {
              setImageUrl(result.filesUploaded[0].url);
              setIsPickerOverlayVisible(false);
            }}
          />
        )}
      </div>
      <div className="serverMessageN">
        <p className="serverResN" style={{ visibility: `${messageVisible}` }}>
          {window.localStorage.getItem('message')}
        </p>
      </div>
    </>
  );
};

export default FileStack;
