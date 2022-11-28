import './MainFooter.css';


const MainFooter = () => {
  return (
    <div className='main-footer'>
        <div className='main-footer-row'>
          <div className='main-footer-column'>
            <ul className="main-footer-list-unstyled">
            <h4>COMPANY</h4>
            <br/>
              <li href="#about-us">About Us</li>
              <li href="#careers">Careers</li>
              <li href="#partners">Partners</li>
            </ul>

          </div>
          <div className='main-footer-column'>
            
            <ul className="main-footer-list-unstyled">
            <h4>COURSES</h4>
            <br/>
              <li href="#register" className='main-footer-li'>Register</li>
              <li href="#login" className='main-footer-li'>Login</li>
              <li href="#projects" className='main-footer-li'>Projects</li>
              <li href="#teachers" className='main-footer-li'>Teachers</li>
              <li href="#parents" className='main-footer-li'>Parents</li>
              <li href="#recources" className='main-footer-li'>Resources</li>
            </ul>
          </div>

          <div className='main-footer-column'>
            <ul className="main-footer-list-unstyled">
            <h4>SUPPORT</h4>
            <br/>
              <li href="#faqs">FAQs</li>
              <li href="#helpdesk">Helpdesk</li>
              <li href="#contact-us">Contact Us</li>
            </ul>
          </div>

          <div className='main-footer-column'>
            <ul className="main-footer-list-unstyled">
            <h4>LEGAL</h4>
            <br/>
              <li href="#tcs">Terms & Conditions</li>
              <li href="#privacy-policy">Privacy Policy</li>
            </ul>
          </div>

          <div className='main-footer-column' id='levelup-footer'>
            <ul className="main-footer-list-unstyled">
            <h4>LevelUp Works</h4>
            <br/>
              <li>LevelUp Works is an Auckland-based enterprise
                dedicated to developing game-based learning 
                software to help teachers in response to the 
                New Zealand Digital Technologies & Hangarau Matihiko.</li>
              <li><a href="mailto:alan@levelupworks.com" className='main-footer-email'>alan@levelupworks.com</a></li>
              <li>(021) 668 185</li>
            </ul>
          </div>


        </div>
      </div>
  )
}

export default MainFooter