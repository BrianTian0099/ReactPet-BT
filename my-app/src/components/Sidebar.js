import React from 'react';
import ProfileSection from './ProfileSection';
import NavLink from './NavLink';
import '../css/Sidebar.css';

const Sidebar = ({ onSectionChange }) => (
  <div className="sideBar">
    <ProfileSection />
    <hr />
    <NavLink section="section2" icon="user-solid.svg" text="個人資訊" onClick={onSectionChange} />
    <NavLink section="section3" icon="shield-dog-solid.svg" text="寵物資訊" onClick={onSectionChange} />
    <NavLink section="section4" icon="money-bill-solid.svg" text="訂單管理" onClick={onSectionChange} />
    <NavLink section="section5" icon="message-regular.svg" text="通知管理" onClick={onSectionChange} />
    <NavLink section="section6" icon="heart-regular.svg" text="收藏管理" onClick={onSectionChange} />
    <div className="backToButtonClass">
      <button id="backToHome">返回首頁</button>
    </div>
  </div>
);

export default Sidebar;
