import React from 'react';
import '../css/Section.css';

const Section = ({ id, active, children }) => (
  <div id={id} className={`section ${active ? 'active' : ''}`}>
    {children}
  </div>
);

export default Section;
