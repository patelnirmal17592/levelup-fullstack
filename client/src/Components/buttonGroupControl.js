import "./ButtonGroupControl/button-group.css";
import React, { useState } from "react";

// below function handles button group to filter on Course type

const ButtonGroupControl = ({ buttons, doSomethingAfterClick }) => {

  const [clicked, setClicked] = useState(-1);

  const handleClick = (event, i) => {
    setClicked(i);
    doSomethingAfterClick(event);
  }

  return (
    <>
      <div className='customButtonDivN'>
        {
        buttons.map((buttonLabel, i) => (           // this is mapping on values of array passed as prop
          <button key={i} name={buttonLabel} onClick={(event) => handleClick(event, i)} className={i === clicked ? "customButtonN activeN" : "customButtonN"}>
            {buttonLabel}
          </button>
        ))
      }
      </div>
    </>
  );
};

export default ButtonGroupControl;
