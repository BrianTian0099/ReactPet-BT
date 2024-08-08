// App.js
import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'member'
});

module.exports = pool;



function App() {
  const [signUpMode, setSignUpMode] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = '/profile';
      } else {
        setLoginMessage(data.message);
      }
    } catch (err) {
      setLoginMessage('服務器錯誤');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();
      if (response.ok) {
        setRegisterMessage('註冊成功');
      } else {
        setRegisterMessage(data.message);
      }
    } catch (err) {
      setRegisterMessage('服務器錯誤');
    }
  };

  return (
    <div className={`container ${signUpMode ? 'signUpMode' : ''}`}>
      <div className="formsContainer">
        <div className="signinSignup">
          <form className="signInForm" onSubmit={handleLogin}>
            <h2 className="title">登入</h2>
            <div className="inputField">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" name="username" placeholder="用户名" required />
            </div>
            <div className="inputField">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" name="password" placeholder="密碼" required />
            </div>
            <input type="submit"  className="btn solid" value="確認登入" />
            <p className="message">{loginMessage}</p>
            <p className="socialText">或使用社群帳號登入</p>
            <div className="socialMedia">
              <a href="#" className="socialIcon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="socialIcon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="socialIcon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="socialIcon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </form>
          <form className="signUpForm" onSubmit={handleRegister}>
            <h2 className="title">註冊</h2>
            <div className="inputField">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" name="username" placeholder="用户名" required />
            </div>
            <div className="inputField">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" name="email" placeholder="郵箱" required />
            </div>
            <div className="inputField">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" name="password" placeholder="密碼" required />
            </div>
            <input type="submit" className="btn" value="確認註冊" />
            <p className="message">{registerMessage}</p>
            <p className="socialText">或使用社群帳號註冊</p>
            <div className="socialMedia">
              <a href="#" className="socialIcon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="socialIcon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="socialIcon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="socialIcon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panelsContainer">
        <div className="panel leftPanel">
          <div className="content">
            <h3>新来的嗎?</h3>
            <p>歡迎你的到來，我們網站是最友善寵物的網站。</p>
            <button className="btn transparent" onClick={() => setSignUpMode(true)}>
              註冊
            </button>
          </div>
          <img src="img/undraw_welcome_cats_thqn.svg" className="image" alt="" />
        </div>
        <div className="panel rightPanel">
          <div className="content">
            <h3>已經有帳號了?</h3>
            <p>如果您已經有本站帳號，請點擊切換至登入。</p>
            <button className="btn transparent" onClick={() => setSignUpMode(false)}>
              登入
            </button>
          </div>
          <img src="img/undraw_good_doggy_re_eet7.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
