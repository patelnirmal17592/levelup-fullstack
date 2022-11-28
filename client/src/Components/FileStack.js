import { useState } from 'react';
import { PickerOverlay } from 'filestack-react-18';
import ProfileButton from './ProfileButton/ProfileButton';
// import axios from "axios";


const FileStack = ({ teacherId }) => {
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const [setUpdateImage] = useState();
 

  const FILESTACK_API_KEY = process.env.REACT_APP_FILESTACK_API_KEY; 

  const handleVisible = () => {
    setIsPickerOverlayVisible(!isPickerOverlayVisible);
  };

  return (
    <>
      <ProfileButton onClick={handleVisible}>CHANGE PHOTO</ProfileButton>
      <div>
        {isPickerOverlayVisible && (
          <PickerOverlay
            apikey={FILESTACK_API_KEY}
            onSuccess={(result) => {
              setImageUrl(result.filesUploaded[0].url);
              setIsPickerOverlayVisible(false);
              setUpdateImage();
            }}
          />
        )}
      </div>

      {imageUrl && (
        <>
{/* {imageUpdate.map((image) => { 

  const teacherId = image.TeacherID;

  const insertPic = () => {

    axios.post(`http://localhost:4000/teacher/update-pic${teacherId}`,
    { profilePic: imageUrl })

              .then(response => {
                console.log(response);
              })

              .catch(error => {
                console.log(error);
              })
        };
        
        console.log(insertPic);

        })}
         */}
    
        </>
      )}
    </>
  );
};

export default FileStack;