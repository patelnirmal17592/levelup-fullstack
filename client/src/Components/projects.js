import "../App.css";
import ButtonGroupControl from "./buttonGroupControl";
import ItemsPerPage from "./itemsPerPage";
import { useState, useEffect } from "react";
import axios from "axios";

const ProjectsFilter = () => {
  const [levelArray, setLevelArray] = useState([]);     // sets array of projects coming from server
  const [currentArray, setCurrentArray] = useState([]); // sets array of projects coming from server

  //  Making GET request to get projects data
  const getProjects = async () => {
    const { data } = await axios.get("http://localhost:4000/projects");
    setLevelArray(data);
    setCurrentArray(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  // all functions below handles different filter features

  const subscriptionHandler = (value, e) => {
    const checked = e.target.checked;
    const isValue = e.target.value;

    if (checked && isValue) {
      if (isValue === "false") {
        const newArray = levelArray.filter((data) => data.Subscription === 0);
        return [...newArray];
      } else if (isValue === "true") {
        const newArray = levelArray.filter((data) => data.Subscription === 1);
        return [...newArray];
      } else if (isValue === "false" && isValue === "true") {
        const newArray = levelArray.filter(
          (data) => data.Subscription === 1 && data.Subscription === 0
        );
        return [...newArray];
      }
    } else {
      return [...currentArray];
    }
  };

  const itemsHandlerOnClick = (e) => {
    const showTotal = e.target.name;

    switch (showTotal) {
      case "5":
        setLevelArray(levelArray.slice(0, 5));
        break;
      case "10":
        setLevelArray(levelArray.slice(0, 10));
        break;
      case "15":
        setLevelArray(levelArray.slice(0, 15));
        break;
      default:
    }
  };

  // LevelFilter function is below this line
  const levelFilter = (event) => {
    const levelSelected = event.target.name;



    if (levelSelected === "BEGINNER") {
      const newArray = levelArray.filter((data) => data.Course === "BEGINNER");
      return [...newArray];
    } else if (levelSelected === "INTERMEDIATE") {
      const newArray = levelArray.filter(
        (data) => data.Course === "INTERMEDIATE"
      );
      return [...newArray];
    } else if (levelSelected === "ADVANCED") {
      const newArray = levelArray.filter((data) => data.Course === "ADVANCED");
      return [...newArray];
    } else {
      return [...levelArray];
    }
  };
  // levelArray.filter((data) => data.Course === 'BEGINNER') // delete this line if not useful
  // LevelFilter function is above this line

  const checkboxhandler = (event) => {
    const checked = event.target.checked;
    const checkboxName = event.target.name;
    if (checked) {
      switch (checkboxName) {
        case "Animation":
          setLevelArray(
            levelArray.filter((data) => data.ActivityType === "Animation")
          );
          break;
        case "Game":
          setLevelArray(
            levelArray.filter((data) => data.ActivityType === "Game")
          );
          break;
        case "Chatbot":
          setLevelArray(
            levelArray.filter((data) => data.ActivityType === "Chatbot")
          );
          break;
        case "Augmented reality":
          setLevelArray(
            levelArray.filter(
              (data) => data.ActivityType === "Augmented reality"
            )
          );
          break;
        default:
          setLevelArray(levelArray);
      }
    } else if (!checked) {
      switch (checkboxName) {
        case "Animation":
          setLevelArray(
            currentArray.filter((data) => data.ActivityType !== "Animation")
          );
          break;
        case "Game":
          setLevelArray(
            currentArray.filter((data) => data.ActivityType !== "Game")
          );
          break;
        case "Chatbot":
          setLevelArray(
            currentArray.filter((data) => data.ActivityType !== "Chatbot")
          );
          break;
        case "Augmented reality":
          setLevelArray(
            currentArray.filter(
              (data) => data.ActivityType !== "Augmented reality"
            )
          );
          break;
        default:
      }
    }
  };

  const yearLevelHandler = (e) => {
    const checked = e.target.checked;
    const name = e.target.name;

    if (checked && name) {
      if (name === "1-4") {
        const newArray = levelArray.filter((data) => data.YearLevel < 5);
        return [...newArray];
      } else if (name === "5-6") {
        const newArray = levelArray.filter(
          (data) => data.YearLevel > 4 && data.YearLevel < 7
        );
        return [...newArray];
      } else if (name === "7-8") {
        const newArray = levelArray.filter(
          (data) => data.YearLevel > 6 && data.YearLevel < 9
        );
        return [...newArray];
      } else if (name === "9-13") {
        const newArray = levelArray.filter(
          (data) => data.YearLevel > 8 && data.YearLevel < 14
        );
        return [...newArray];
      }
    } else {
      return [...currentArray];
    }
  };

  const subjectHandler = (e) => {
    const checked = e.target.checked;
    const name = e.target.name;

    if (checked && name) {
      if (name === "computerScience") {
        const newArray = levelArray.filter(
          (data) => data.SubjectMatter === "Computer science"
        );
        return [...newArray];
      } else if (name === "maths") {
        const newArray = levelArray.filter(
          (data) => data.SubjectMatter === "Maths"
        );
        return [...newArray];
      } else if (name === "science") {
        const newArray = levelArray.filter(
          (data) => data.SubjectMatter === "Science"
        );
        return [...newArray];
      } else if (name === "language") {
        const newArray = levelArray.filter(
          (data) => data.SubjectMatter === "Language"
        );
        return [...newArray];
      } else if (name === "art") {
        const newArray = levelArray.filter(
          (data) => data.SubjectMatter === "Art"
        );
        return [...newArray];
      } else if (name === "music") {
        const newArray = levelArray.filter(
          (data) => data.SubjectMatter === "Music"
        );
        return [...newArray];
      }
    } else {
      return [...currentArray];
    }
  };

  return (
    <>
      <div className="projectContainerN">
        <div className="containerN">
          <div className="projectHeaderN">
            <h1 className="phN">PROJECTS</h1>
            <br></br>
            <p>
              Welcome to the project library. You can use the filters on the
              left to help you search for specific projects.
            </p>
          </div>
          <div className="projectBoardContainerN">
            <div className="projectFilterN">
              <div className="subcriptionN">
                <h5 className="pfh5N">SUBCRIPTION</h5>
                <label>
                  <input
                    type="checkbox"
                    value="false"
                    onClick={(e) =>
                      setLevelArray(subscriptionHandler("false", e))
                    }
                  ></input>{" "}
                  <span>Free</span>
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    value="true"
                    onClick={(e) =>
                      setLevelArray(subscriptionHandler("true", e))
                    }
                  ></input>{" "}
                  <span>Premium</span>
                </label>
              </div>
              <div className="activityTypeN">
                <h5 className="pfh5N">ACTIVITY TYPE</h5>
                <label>
                  <input
                    type="checkbox"
                    name="Animation"
                    onChange={checkboxhandler}
                  ></input>
                  <span>Animation</span>
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="Game"
                    onChange={checkboxhandler}
                  ></input>
                  <span>Game</span>
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="Chatbot"
                    onChange={checkboxhandler}
                  ></input>
                  <span>Chatbot</span>
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="Augmented reality"
                    onChange={checkboxhandler}
                  ></input>
                  <span>Augmented Reality</span>
                </label>
              </div>
              <div className="yearLevelN">
                <h5 className="pfh5N">YEAR LEVEL</h5>
                <label>
                  <input
                    type="checkbox"
                    name="1-4"
                    onClick={(e) => setLevelArray(yearLevelHandler(e))}
                  ></input>
                  <span>1 - 4</span>
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="5-6"
                    onClick={(e) => setLevelArray(yearLevelHandler(e))}
                  ></input>
                  <span>5 - 6</span>
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="7-8"
                    onClick={(e) => setLevelArray(yearLevelHandler(e))}
                  ></input>
                  <span>7 - 8</span>
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="9-13"
                    onClick={(e) => setLevelArray(yearLevelHandler(e))}
                  ></input>
                  <span>9 - 13</span>
                </label>
              </div>
              <div className="subjectMatterN">
                <h5 className="pfh5N">SUBJECT MATTER</h5>
                <label>
                  <input
                    type="checkbox"
                    name="computerScience"
                    onClick={(e) => setLevelArray(subjectHandler(e))}
                  ></input>
                  <span>Computer Science</span>
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="maths"
                    onClick={(e) => setLevelArray(subjectHandler(e))}
                  ></input>
                  <span>Maths</span>
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="science"
                    onClick={(e) => setLevelArray(subjectHandler(e))}
                  ></input>
                  <span>Science</span>
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="language"
                    onClick={(e) => setLevelArray(subjectHandler(e))}
                  ></input>
                  <span>Language</span>
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="art"
                    onClick={(e) => setLevelArray(subjectHandler(e))}
                  ></input>
                  <span>Art</span>
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="music"
                    onClick={(e) => setLevelArray(subjectHandler(e))}
                  ></input>
                  <span>Music</span>
                </label>
              </div>
            </div>

            <div className="projectsBoardN">
              <div className="filterBarN">
                <ButtonGroupControl
                  buttons={["BEGINNER", "INTERMEDIATE", "ADVANCED"]}
                  doSomethingAfterClick={(event) =>
                    setLevelArray(levelFilter(event))
                  }
                ></ButtonGroupControl>
                <ItemsPerPage
                  buttons={[5, 10, 15]}
                  doSomething={itemsHandlerOnClick}
                ></ItemsPerPage>
              </div>
              <div className="subProjectContainerN">
                {levelArray.map((data, index) => (                      // lastly mapping on updated array of projects
                  <div className="eachProjectN" key={index}>
                    <img src={data.ProjectImage} alt="img not found"></img>
                    <p>{data.Name}</p>
                    <p>
                      {data.Course} | {data.ActivityType}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="backToTopDivN">
            <a href="#top">BACK TO TOP</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsFilter;
