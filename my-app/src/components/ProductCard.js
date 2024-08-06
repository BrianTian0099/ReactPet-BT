import React, { useState } from 'react';
import '../css/ProductCard.css';

/**
 * ProductCard 组件 - 商品卡片
 * @param {Object} props - 组件的属性
 * @param {string} props.image - 商品圖
 * @param {string} props.title - 商品標題
 * @param {string} props.price - 商品價
 * @returns JSX.Element
 */
const ProductCard = ({ image, title, price }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`productCard ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <div className="productImageWrapper">
        <img src={image} alt={title} className="productImage" />
      </div>
      <div className="productInfo">
        <h3 className="productTitle">{title}</h3>
        <p className="productPrice">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
