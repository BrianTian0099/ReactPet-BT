import React, { useState } from 'react';
import DataInput from './DataInput';
import '../css/Card.css';

const Card = ({ id, image, name, cardId }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleCard = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`petCard ${expanded ? 'expanded' : ''}`} id={id} onClick={() => !expanded && toggleCard()}>
      <div className="cardContent">
        {image ? (
          <>
            <img className='dataHaveImg' src={image} alt={name} />
            <p>{name}</p>
          </>
        ) : (
          <>
            <img id='imgPlus' className='imgPlus' src={`${process.env.PUBLIC_URL}/assets/卡片加號.svg`} alt="" />
            <p>點擊查看更多信息</p>
          </>
        )}
      </div>
      <div className="expandedContent">
        <button className="backButton" onClick={toggleCard}>返回</button>
        <div className="setSideContent">
          <div className="petPic">
            {image && <img id='biggerImg' src={image} alt={name} />}
          </div>
          <div className="dataGroup">
            <DataInput cardId={cardId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
