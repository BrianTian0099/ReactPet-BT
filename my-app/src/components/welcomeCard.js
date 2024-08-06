import React from 'react';
import '../css/WelcomeCard.css';          

const WelcomeCard= () =>{
    return(
<div className='welCard'>
    <div id='cardLabel'>
    <p id="welTop">吳康人</p>
    <p id='welLevels'>骨灰級使用者</p>
    <p id="welDays">帳號已建立356天
    </p>
    <p id='welOrder'>購買次數:150次</p>
    </div>
</div>
    );
}


export default WelcomeCard;