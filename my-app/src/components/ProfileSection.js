import React, { useEffect } from 'react';
import '../css/ProfileSection.css';

const ProfileSection = () => {
  useEffect(() => {
    let slideIndex = 0;
    const slides = document.getElementsByClassName('slide');
    
    const showSlides = () => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('fade-in');
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].classList.add('fade-in');
      setTimeout(showSlides, 6000);
    };

    showSlides();
  }, []);

  return (
    <div className="profileSec">
      <div className="background-slideshow">
        <div className="overlay"></div>
        <div className="slide" style={{ backgroundImage: "url('./assets/pexels-hnoody93-58997.jpg')" }}></div>
        <div className="slide" style={{ backgroundImage: "url('./assets/pexels-valeriya-1805164.jpg')" }}></div>
        <div className="slide" style={{ backgroundImage: "url('./assets/pexels-lina-1741205.jpg')" }}></div>

      </div>
      <img class='humanImg' src="./assets/pexels-japheth-569170.jpg" alt="Profile" />
      <div className="profileText section1 userName">
        <span>吳康人</span>
        <p>2023.9.12 加入</p>
      </div>
    </div>
  );
};

export default ProfileSection;


// {/* <div className="slide" style={{ backgroundImage: "url('https://kinsta.com/wp-content/uploads/2021/02/what-is-a-url.jpg')" }}></div> */}