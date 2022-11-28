import React, { useState } from "react";
import objectivesData from "./objectivesData.js";
import {useNavigate} from 'react-router-dom'
import "../SideNav/SideNav.css";
import "./dashboard.css";
import SideNavFooter from "../SideNav/SideNavFooter.js";
import useToken from "../../Helpers/useToken.js";


export default function ObjectivesNav() {
    const [visible, setVisible] = useState(false)

    const {token:student} = useToken();
    console.log(student)
    let navigate = useNavigate()
 
    const showObjectives = () => {
      setVisible(!visible)
    }
 
  return (
    <>
      <div className="objectives ">
        <img className="avatar" src={student?.ProfilePic} alt="avatar"></img>

        <div className={visible ? "show-nav" : "hide-nav"}>
         {objectivesData.map((objective, key) => (
           <ul key={key}>

             {visible ? <div className='objective show-nav' onClick={() => navigate(objective.url)}><img src={objective.icon} alt="icon" />  {objective.title }</div> : <div className="hide-nav" onClick={() => navigate(objective.url)}><img src={objective.icon} alt="icon" /></div>}
           </ul> ))}
         <button className={visible ? "arrow-btn arrow-left-btn bi bi-caret-left-fill" : "arrow-right-btn bi bi-caret-right-fill"} onClick={showObjectives}></button>
       <SideNavFooter visible={!visible}/>
       </div>
      </div>
    </>
  );
}
