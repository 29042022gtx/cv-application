import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './styles/section.css';
import GernaralInfo from './components/GeneralInfo';
import EduExp from './components/EduExp';
import PracEdu from './components/PracExp';

function App() {
  return (
    <div style={{ padding: '0 8px' }}>
      <h1 className="header">CV Application</h1>
      <div className="section-title content-wrapper">
        <u>General Info</u>
      </div>
      <GernaralInfo />
      <div className="section-title content-wrapper">
        <u>Educational Experience</u>
      </div>
      <EduExp />
      <div className="section-title content-wrapper">
        <u>Practice Experience</u>
      </div>
      <PracEdu />
    </div>
  );
}

export default App;
