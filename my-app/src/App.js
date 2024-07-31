import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('section1');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app">
      <Sidebar onSectionChange={handleSectionChange} />
      <MainContent activeSection={activeSection} />
    </div>
  );
};

export default App;
