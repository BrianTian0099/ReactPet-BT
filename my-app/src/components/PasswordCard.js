import React, { useEffect, useRef } from 'react';
import '../css/PasswordCard.css';

const PasswordCard = ({ button, onClose, isOpen }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        cardRef.current.classList.add('open');
      });
    } else {
      cardRef.current.classList.remove('open');
    }
  }, [isOpen]);

  return (
    <div className={`passwordCard`} id='allPasswordCard' ref={cardRef}>
      <button id='closeBtn' onClick={onClose}>關閉</button>
      <br></br>
      <br></br>
      <br></br>
      <span>更改使用者密碼</span>
    
      <form>
        <p>目前密碼確認</p>
        <input 
          type="password" 
          id="nowPassword" 
          name="nowPassword" 
          placeholder="Enter your current password."
        />
        <p>新密碼輸入</p>
        <input 
          type="password" 
          id="newPassword" 
          name="newPassword" 
          placeholder="Enter your new password."
        />
        <p>再次新密碼確認</p>
        <input 
          type="password" 
          id="confirmNewPassword" 
          name="confirmNewPassword" 
          placeholder="Confirm your new password."
        />
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
      <br></br>
      <div><br></br>
      <br></br>
        <br></br>
      </div>
        {button}
      </form>
    </div>
  );
};

export default PasswordCard;
