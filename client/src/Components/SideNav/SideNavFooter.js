import React from 'react'
import { sideNavFooterItems } from "./SideNavFooterItems";
import {useNavigate} from 'react-router-dom'

function SideNavFooter(props) {
  let navigate = useNavigate()


  return (
     <div
          className={
            props.visible
              ? " nav-footer-items-container-center"
              : "nav-footer-items-container"
          }
        >
          {sideNavFooterItems.map((item, index) => {
            return (
              <div className={"nav-footer-items"} onClick={() => navigate(item.url)}key={index}>
                <>
                  <i
                    className={props.visible ? `${item.iconLarge}` : `${item.icon}`}
                  ></i>
                  <p>
                    <span className={props.visible ? "nav-footer-item-hidden" : ""}>
                      {item.title}
                    </span>
                  </p>
                </>
              </div>
            );
          })}
        </div>
  )
}

export default SideNavFooter