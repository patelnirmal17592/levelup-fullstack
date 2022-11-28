import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home.js"; //Checked
import StudentProjectLibrary from "./Pages/student-project-library"; //Checked
import TeacherProgressTrackerPage from "./Pages/TeacherProgressTrackerPage"; //Checked
import TeacherProfileViewerPage from "./Pages/TeacherProfileViewer/TeacherProfileViewerPage"; //Checked
import TeacherProjectLibrary from "./Pages/TeacherProjectLibrary/TeacherProjectLibrary"; //Checked
import StudentBuilderDashboard from "./Pages/StudentBuilderDashboard"; //Checked
import VideoTutorial from "./Components/LearningObjectives/VideoTutorial"; //Checked
import MakeProject from "./Components/LearningObjectives/MakeProject"; //Checked
import SubmitProject from "./Components/LearningObjectives/SubmitProject"; //Checked
import BonusChallenge from "./Components/LearningObjectives/BonusChallenge"; //Checked
import TakeQuiz from "./Components/LearningObjectives/TakeQuiz"; //Checked
import ProgressTracker from "./Components/ProgressTracker/ProgressTracker";
import StudentProfiles from "./Components/StudentProfiles/StudentProfiles";
import HelpRequest from "./Pages/HelpRequests/HelpRequests";
import StudentProfileViewer from "./Pages/StudentProfileViewer";
import Logout from "./Components/Logout/Logout";
import SubjectData from "./Components/LearningObjectives/SubjectData";
// import HomeModal from "./Components/logIn-register/HomeModal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/teacher-profile-viewer"
            element={<TeacherProfileViewerPage />}
          />
          <Route
            path="/student-project-library"
            element={<StudentProjectLibrary />}
          />
          <Route
            path="/student-profile-viewer"
            element={<StudentProfileViewer />}
          ></Route>
          <Route
            path="/teacher-project-library"
            element={<TeacherProjectLibrary />}
          />
          {/* <Route path="/login" element={<HomeModal />} /> */}
          <Route path="/teacher" element={<TeacherProgressTrackerPage />}>
            <Route path="progress-tracker" element={<ProgressTracker />} />
            <Route path="student-profiles" element={<StudentProfiles />} />
            <Route path="help-requests" element={<HelpRequest />} />
          </Route>
          <Route path="/student" element={<StudentBuilderDashboard />}>
            <Route path="" index element={<SubjectData getProperty={data => data.LearningObject} propertyName="Learning Objectives" />} />
            <Route
              path="learning-objectives"
              element={<SubjectData getProperty={data => data.LearningObject} propertyName="Learning Objectives" />}
            />
            <Route path="instructions" element={<SubjectData getProperty={data => data.Instructions} propertyName="Instructions" />} />
            {/* <Route path="instructions" element={<Instructions />} /> */}
            <Route path="video-tutorial" element={<VideoTutorial />} />
            <Route path="make-project" element={<MakeProject />} />
            <Route path="submit-project" element={<SubmitProject />} />
            <Route path="bonus-challenge" element={<BonusChallenge />} />
            <Route path="takequiz" element={<TakeQuiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
