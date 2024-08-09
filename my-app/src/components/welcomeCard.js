import React, { useEffect } from 'react';
import '../css/WelcomeCard.css';

const WelcomeCard = () => {
    useEffect(() => {
        let slideIndex = 0;
        const slides = document.getElementsByClassName('slideShowERA');

        const showSlides = () => {
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('wel-fade-in');
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }

            slides[slideIndex - 1].classList.add('wel-fade-in');
            setTimeout(showSlides, 8000); // 設定幻燈片切換間隔為 8000 毫秒
        };
        showSlides();
    }, []);

    return (
        <div className='welCard'>
            <div className='textset'>
                <p id="welTop">吳康人</p>
                <p id='welLevels'>骨灰級使用者</p>
                <p id="welDays">帳號已建立356天</p>
                <p id='welOrder'>購買次數:150次</p>
            </div>
            <div className="slideShowERA" style={{ backgroundImage: "url('./assets/pexels-hnoody93-58997.jpg')" }}></div>
            <div className="slideShowERA" style={{ backgroundImage: "url('./assets/pexels-valeriya-1805164.jpg')" }}></div>
            <div className="slideShowERA" style={{ backgroundImage: "url('./assets/pexels-lina-1741205.jpg')" }}></div>
        </div>
    );
}

export default WelcomeCard;
