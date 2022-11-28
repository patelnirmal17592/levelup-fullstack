import { React, useState } from "react";
import './HomeSkillSection.css'

export const ButtonController = ({ buttonsArr, doSomethingAfterClick }) => {
  const [clicked, setClicked] = useState(0);

  const handleClick = (event, index) => {
    setClicked(index);
    doSomethingAfterClick(event);
  };
  return (
    <div 
    className='eachBtnN'>
      {buttonsArr.map((element, index) => (
        <button
          index={index}
          name={element}
          className={index === clicked ? "btn-clickN btn-activeN" : "btn-clickN"}
          onClick={(event) => handleClick(event, index)}
        >
          {element}
        </button>
      ))}
    </div>
  );
};
