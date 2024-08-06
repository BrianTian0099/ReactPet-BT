import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';



function App() {
  const [activeSection, setActiveSection] = useState('section1');
  const [sectionTitle, setSectionTitle] = useState('歡迎你的加入');

  const handleSectionChange = (section, title) => {
    setActiveSection(section);
    setSectionTitle(title);
  };

  return (
    <div className="App">
      <Sidebar onSectionChange={handleSectionChange} />
      <MainContent activeSection={activeSection} sectionTitle={sectionTitle} />
    </div>
  );
}

export default App;
