import React, { useState } from "react";
import "./dashboard.css";
import imageLearning from '../../Images/annie-spratt-VFupoYdEYNs-unsplash@2x.png'
import imageSubmit from '../../Images/submitProject.png'
import axios from "axios";
import { PickerOverlay } from 'filestack-react-18'
import useToken from "../../Helpers/useToken";


function SubmitProject() {
  const {token: student} = useToken();
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
  const FILESTACK_API_KEY = process.env.REACT_APP_YOUR_API_KEY; 

  const handleVisible = () => {
    setIsPickerOverlayVisible(!isPickerOverlayVisible);
  };
  
  const uploadPicture = async (submissionUrl) => {
    try{
      const responese = await axios.post(`http://localhost:4000/progress-history/students/${student.StudentID}/projects/1/submission`, {
        submission: submissionUrl
      })
      console.log(`${responese.data}`, 'project submitted')
    } catch(err) {
      console.error(err)
    }
  };

  return (
    <>
      <div className='flex-container'>
        <div className='session'>
          <img className='submit-img' src={imageSubmit} alt="project to submit"/>
          <br/>
          <br/>
          <h3>Submit project photo</h3>
          <br/>
          <p className="paragraph">After completing your project, take a screenshot of your project and upload it here.</p>
          <br/>
          <button className="submit-btn" onClick={handleVisible} >Send Photo</button>
          <div>
          {isPickerOverlayVisible && (
            <PickerOverlay
              apikey={FILESTACK_API_KEY}
              onSuccess={async (result) => {
                await uploadPicture(result.filesUploaded[0].url);
                setIsPickerOverlayVisible(false);
              }}
            />
          )}
          {/* <a href={submissionUrl}>click and open image url </a> */}

        </div>
        </div>

        <div className='session'>
          <img className='submit-img' src={imageLearning} alt="guiding to learn"/>
          <br/>
          <br/>
          <h3>Show your teacher</h3>
          <br/>
          <p className="paragraph">If your teacher is in the same room as you, click the button below to let them know you are done.</p>
          <br/>
          <button className="submit-btn" onClick={handleVisible}>Call Teacher</button>
        </div>
            {/* {submissionUrl} && () */}
      </div>
    </>
  );
}

export default SubmitProject;
