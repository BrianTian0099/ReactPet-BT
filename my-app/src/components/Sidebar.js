import React from 'react';
import ProfileSection from './ProfileSection';
import NavLink from './NavLink';
import '../css/Sidebar.css';

/**
 * Sidebar 组件 
 * @param {Object} props - 组件屬性
 * @param {Function} props.onSectionChange - 切換章節
 * @returns JSX.Element
 */
const Sidebar = ({ onSectionChange }) => (
  
  <div className="sideBar">
    <ProfileSection />
    <hr />
    <NavLink section="section1" icon="house-solid.svg" text="歡迎" onClick={() => onSectionChange('section1', '歡迎回來')} />
    <NavLink id="sideTextCenter" section="section2" icon="user-solid.svg" text="個人資訊" onClick={() => onSectionChange('section2', '個人資訊')} />
    <NavLink id="sideTextCenter" section="section3" icon="shield-dog-solid.svg" text="寵物資訊" onClick={() => onSectionChange('section3', '寵物資訊')} />
    <NavLink id="sideTextCenter" section="section4" icon="money-bill-solid.svg" text="訂單管理" onClick={() => onSectionChange('section4', '訂單管理')} />
    <NavLink id="sideTextCenter" section="section5" icon="message-regular.svg" text="通知管理" onClick={() => onSectionChange('section5', '通知管理 | 推播消息')} />
    <NavLink id="sideTextCenter" section="section6" icon="heart-regular.svg" text="收藏管理" onClick={() => onSectionChange('section6', '收藏管理 | 您喜歡的事物都在這')} />
    <div className="backToButtonClass">
      <button id="backToHome" onClick={() => onSectionChange('section1', '歡迎你的加入')}>返回首頁</button>
    </div>
  </div>
);

export default Sidebar;
