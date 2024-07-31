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
      setTimeout(showSlides, 4000);
    };

    showSlides();
  }, []);

  return (
    <div className="profileSec">
      <div className="background-slideshow">
        <div className="overlay"></div>
        <div className="slide" style={{ backgroundImage: "url('https://kinsta.com/wp-content/uploads/2021/02/what-is-a-url.jpg')" }}></div>
        <div className="slide" style={{ backgroundImage: "url('./image_914786.png')" }}></div>
      </div>
      <img src="image_914786.png" alt="Profile" />
      <div className="profileText section1 userName">
        <span>吳康人</span>
        <p>2023.9.12 加入</p>
      </div>
    </div>
  );
};

export default ProfileSection;
