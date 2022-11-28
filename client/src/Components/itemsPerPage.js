import "../App.css";
import React, { useState } from "react";

// below function handles number of items you see on project display

const ItemsPerPage = ({ buttons, doSomething }) => {
  // console.log(buttons);
  const [userItemClicked, setUserItemClicked] = useState();
  // console.log(userItemClicked)

  const itemsHandler = (e, index) => {
    setUserItemClicked(index);
    doSomething(e);
  }

  return (
    <>
        <div className="showN">
          SHOW
        </div>
      <div className="itemsPerPageButtonN">
        {buttons.map((arr, index) => (
          <button key={index} onClick={(e) => itemsHandler(e, index)} name={arr} className={index === userItemClicked ? 'itemsPerPageButtonN button itemsPerPageButton-activeN' : 'itemsPerPageButtonN button'}>{arr}</button>
        ))}
      </div>
    </>
  );
};

export default ItemsPerPage;
