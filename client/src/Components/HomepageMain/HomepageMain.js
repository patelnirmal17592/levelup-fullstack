import './HomepageMain.css';
import animationsIcon from './img/frame copy.png';
import gamesIcon from './img/joystick copy.png';
import chatbotsIcon from './img/robotic copy.png';
import arIcon from './img/augmented-reality copy.png';
import React, { useState } from "react";
import slide1 from './img/Projects 01.png';
import slide2 from './img/Projects 02.png';
import slide3 from './img/Projects 03.png';
import slide4 from './img/Projects 04.png';


function HomepageMain() {
  const [imageButtonClicked, setImageButtonClicked] = useState({
    image1: true,
    image2: false,
    image3: false,
    image4: false,
  });
  const showPicture = (order) => {
    const resetImages = {
      image1: false,
      image2: false,
      image3: false,
      image4: false,
    };
    setImageButtonClicked({
      ...resetImages,
      [order]: true
    });
  };

  return (
    <div className='sf-homepage-main-container'>

      <div className='sf-homepage-main-text-container'>
        <h2>What we offer</h2>
        <p>The Creative Problem Solving programme
          is series of digital creation projects
          aimed to encourage self-motivation and
          student agency, designed by New Zealand's
          leading IT industry experts and schools.</p>
        <h4>What will students create?</h4>

        <div className='sf-homepage-button-group'>
          <button className='sf-homepage-main-blue-button' onClick={() => showPicture("image1")} >
            <img src={animationsIcon} alt='animation icon'></img><br /> ANIMATIONS</button>
          <button className='sf-homepage-main-blue-button' onClick={() => showPicture("image2")}>
            <img src={gamesIcon} alt='games icon'></img><br /> GAMES</button>
          <button className='sf-homepage-main-blue-button' onClick={() => showPicture("image3")}>
            <img src={chatbotsIcon} alt='animation icon'></img><br /> CHATBOTS</button>
          <button className='sf-homepage-main-blue-button' onClick={() => showPicture("image4")}>
            <img src={arIcon} alt='ar icon'></img> <br /> AUGMENTED REALITY</button>
        </div>

      </div>

      <div className='sf-homepage-main-sliding-images-container'>

        <div>
          {imageButtonClicked.image1 && <img src={slide1} alt="game_image1" className="sf-homepage-main-sliding-img" />}
          {imageButtonClicked.image2 && <img src={slide2} alt="game_image2" className="sf-homepage-main-sliding-img"/>}
          {imageButtonClicked.image3 && <img src={slide3} alt="game_image3" className="sf-homepage-main-sliding-img"/>}
          {imageButtonClicked.image4 && <img src={slide4} alt="game_image4" className="sf-homepage-main-sliding-img"/>}
        </div>

        <div className='sf-homepage-main-sliding-buttons'>
          <button className='sf-small-slider-button' onClick={() => showPicture("image1")}></button>
          <button className='sf-small-slider-button' onClick={() => showPicture("image2")}></button>
          <button className='sf-small-slider-button' onClick={() => showPicture("image3")}></button>
          <button className='sf-small-slider-button' onClick={() => showPicture("image4")}></button>
        </div>

      </div>

    </div>
  )
}

export default HomepageMain