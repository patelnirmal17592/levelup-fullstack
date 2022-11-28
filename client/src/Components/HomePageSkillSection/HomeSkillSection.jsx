import React from "react";
import skill1 from "../../imagesAndSvgs/group_1.png";
import skill2 from "../../imagesAndSvgs/group_2.png";
import skill3 from "../../imagesAndSvgs/group_3.png";
import skill4 from "../../imagesAndSvgs/group_4.png";
import objectives from "./objectives.json";
import { ButtonController } from "./ButtonController";
import { useState } from "react";
import startImage from '../../imagesAndSvgs/star-only.png'

export default function HomeSkillSection() {
  const imagesArr = [
    {
      id: "1",
      image: skill1,
    },
    {
      id: "2",
      image: skill2,
    },
    {
      id: "3",
      image: skill3,
    },
    {
      id: "4",
      image: skill4,
    },
  ];

  // const { id, title, subtitle, points } = objectives;

  const [showContent, setShowContent] = useState(objectives[0]);

  const showContentHandler = (event) => {
    const buttonName = event.target.name;

    switch (buttonName) {
      case "LEARNING PATHWAYS":
        setShowContent(objectives[0]);
        break;
      case "DIGITAL TECHNOLOGIES":
        setShowContent(objectives[1]);
        break;
      case "KEY COMPETENCIES":
        setShowContent(objectives[2]);
        break;
      case "IR4.0":
        setShowContent(objectives[3]);
        break;
      default:
        setShowContent(objectives[4]);
        break;
    }
  };

  const { title, subtitle, points } = showContent;

  const Content = () => {
    return (
        <div className="content-shownN">
          <h3>{title}</h3>
          <p>{subtitle}</p>
          <ul>
            <li><img src={startImage} alt='img not found'></img>{points.one}</li>
            <li><img src={startImage} alt='img not found'></img>{points.two}</li>
            <li><img src={startImage} alt='img not found'></img>{points.three}</li>
            <li><img src={startImage} alt='img not found'></img>{points.four}</li>
            <li><img src={startImage} alt='img not found'></img>{points.five}</li>
          </ul>
        </div>
    );
  };

  return (
    <div className="skill-containerN">
      <div className="content-containerN">
        <div className="top-containerN">
          <p>
            Teaching kids programming and digital skills is MORE than just
            writing code.
          </p>
          <div className="images-containerN">
            {imagesArr.map((data, index) => (
              <div className="imagesN" id={index}>
                <img src={data.image} alt="images not found"></img>
              </div>
            ))}
          </div>
          <h2>How our programme helps teachers and schools</h2>
          <div className="button-control-containerN">
            <ButtonController
              buttonsArr={[
                "LEARNING PATHWAYS",
                "DIGITAL TECHNOLOGIES",
                "KEY COMPETENCIES",
                "IR4.0",
              ]}
              doSomethingAfterClick={showContentHandler}
            ></ButtonController>
          </div>
        </div>
      </div>
        <div className="bottom-containerN">
          <div className="bottom-content-containerN">
            <Content></Content>
          </div>
        </div>
    </div>
  );
}
