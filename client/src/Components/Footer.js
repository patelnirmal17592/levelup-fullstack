import "../App.css";
import React from "react";

// below function handles the footer that Sonja created to share as an component

const Footer = () => {
  return (
    <div className="footerContainerN">
      <div className="main-footerN">
        <div className="rowN">
          <div className="columnN">
            <ul className="list-unstyledN">
              <h4>COMPANY</h4>
              <br />
              <li className='liClassN' href="#about-us">About Us</li>
              <li className='liClassN' href="#careers">Careers</li>
              <li className='liClassN' href="#partners">Partners</li>
            </ul>
          </div>
          <div className="columnN">
            <ul className="list-unstyledN">
              <h4>COURSES</h4>
              <br />
              <li className='liClassN' href="#register">Register</li>
              <li className='liClassN' href="#login">Login</li>
              <li className='liClassN' href="#projects">Projects</li>
              <li className='liClassN' href="#teachers">Teachers</li>
              <li className='liClassN' href="#parents">Parents</li>
              <li className='liClassN' href="#recources">Resources</li>
            </ul>
          </div>

          <div className="columnN">
            <ul className="list-unstyledN">
              <h4>SUPPORT</h4>
              <br />
              <li className='liClassN' href="#faqs">FAQs</li>
              <li className='liClassN' href="#helpdesk">Helpdesk</li>
              <li className='liClassN' href="#contact-us">Contact Us</li>
            </ul>
          </div>

          <div className="columnN">
            <ul className="list-unstyledN">
              <h4>LEGAL</h4>
              <br />
              <li className='liClassN' href="#tcs">Terms & Conditions</li>
              <li className='liClassN' href="#privacy-policy">Privacy Policy</li>
            </ul>
          </div>

          <div className="columnN">
            <ul className="list-unstyledN">
              <h4>LevelUp Works</h4>
              <br />
              <p>
                LevelUp Works is an Auckland-based enterprise dedicated to
                developing game-based learning software to help teachers in
                response to the New Zealand Digital Technologies & Hangarau
                Matihiko.
              </p>
              <a href="mailto:alan@levelupworks.com" className="emailN">
                alan@levelupworks.com
              </a>
              <p>(021) 668 185</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
