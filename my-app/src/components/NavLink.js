import React from 'react';
import '../css/NavLink.css';

const NavLink = ({ section, icon, text, onClick }) => (
  <a className={`section${section.slice(-1)} imgChange`} href={`#${section}`} onClick={() => onClick(section)}>
    <img src={`${process.env.PUBLIC_URL}/assets/${icon}`} alt="" />
    &nbsp;&nbsp;&nbsp;&nbsp;{text}
  </a>
);

export default NavLink;
