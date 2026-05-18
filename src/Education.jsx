// src/components/Education.js
import React from 'react';
import './Education.css';
import HKUSTlogo from './assets/hkust-logo.png';   // ← This is the correct path now
import CUHKlogo from './assets/cuhk-logo.png';       // ← This is the correct path now

const Education = () => {
  return (
    <section className="education-section">
      <div className="education-card">          
        <h2>Education</h2>

        <div className="education-item">
          <div className="education-left">     {/* ← New wrapper */}
            <div className="education-year">2026 – 2030 (Expected)</div>
            <div className="education-details">
              <h3>Doctor of Philosophy in Computer Science and Engineering</h3>
              <h4>The Hong Kong University of Science and Technology</h4>
              <p>Supervisor: Prof. Raymond Chi-Wing Wong</p>
              <p>HKPFS awardee</p>
            </div>
          </div>

          <img 
            src={HKUSTlogo} 
            alt="HKUST Logo" 
            className="university-logo"
          />
        </div>

        {/* Add more degrees by copying the block above */}
        <div className="education-item">
          <div className="education-left">     {/* ← New wrapper */}
            <div className="education-year">2024 - 2026</div>
            <div className="education-details">
              <h3>Master of Science in Big Data Technology</h3>
              <h4>The Hong Kong University of Science and Technology</h4>
              <p>GPA: 4.03/4.30</p>
            </div>
          </div>

          <img 
            src={HKUSTlogo} 
            alt="HKUST Logo" 
            className="university-logo"
          />
        </div>

        <div className="education-item">
          <div className="education-left">     {/* ← New wrapper */}
            <div className="education-year">2020 - 2024</div>
            <div className="education-details">
              <h3>Bachelor of Science in Mathematics</h3>
              <h4>The Chinese University of Hong Kong</h4>
              <p>First class honours</p>
              <p>Stream: Enrichemnt Mathematics</p>
              <p>Stream: Computational & Applied Mathematics</p>
            </div>
          </div>

          <img 
            src={CUHKlogo} 
            alt="CUHK Logo" 
            className="university-logo"
          />
        </div>
      </div>
    </section>
    
  );
};

export default Education;