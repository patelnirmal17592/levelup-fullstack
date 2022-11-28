
import React, { useState } from 'react'
import heroImage from './img/Hero_image_option_1_edit_2.png';
import './HeroImage.css';
import ProfileButton from '../ProfileButton/ProfileButton';
import LoginRegister from '../logIn-register/LoginRegister';



function HeroImage() {

  const [openLoginModal, setOpenLoginModal] = useState(false);

  return (
    <>

      <div className='hero-text'>
        <img className='hero-pic' src={heroImage} alt="hero">
        </img>

        <div className='hero-image-text'>

          <h1 className='sf-hero-image-header-text'>Prepare young minds for a better
            <span style={{ fontWeight: 'Bolder', color: '#42C0F6' }}> future.</span></h1>

          <h4 className='sf-hero-image-small-text'>Let us help you advance students in
            Digital Technologies and other learning
            areas with our project-based learning programme.
          </h4>

          <div className='login-register hero-btn-style'>
            <ProfileButton type="button"
              buttonStyle="btn-white-outlined">LEARN MORE</ProfileButton>

            <div className="btn-with-small-print">
              <ProfileButton type="button"
                buttonStyle="btn-magenta-solid" onClick={() => { setOpenLoginModal(true) }} >SIGN UP</ProfileButton>
              {openLoginModal && <LoginRegister closeModal={setOpenLoginModal} />}
              <p className="hero-small-print">
                *Basic subscription includes the first 15 projects free of charge.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HeroImage