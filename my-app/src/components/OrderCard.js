import React from 'react';
import '../css/OrderCard.css';

const OrderCard = ({ id, type, name, service, clinic, doctor, imgSrc, item, date, orderId }) => (
  <div className="orderCard" id={id}>
    <img src={imgSrc} alt="訂單照片" />
    <div className="orderInfo">
      <div className="orderType">
        <div style={{ backgroundColor: type === '醫療訂單' ? '#00aaff' : type === '美容訂單' ? '#cc66ff' : '#ff6600' }}></div>
        <span>{type}</span>
      </div>
      <div className="orderDetails">
        {name && <span>毛孩子名稱: {name}</span>}
        {service && <span>服務類型: {service}</span>}
        {clinic && <span>服務診所 / 醫師: {clinic} / {doctor}</span>}
        {item && <span>項目名稱: {item}</span>}
        {date && <span>訂購時間: {date}</span>}
        {orderId && <span>訂購單號: {orderId}</span>}
      </div>
    </div>
  </div>
);

export default OrderCard;
