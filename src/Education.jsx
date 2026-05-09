// src/components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section">
      <div className="education-card">          {/* ← NEW: Shadowed block */}
        <h2>Education</h2>

        <div className="education-item">
          <div className="education-year">2030 – 2040</div>
          <div className="education-details">
            <h3>Bachelor of Fried Fries</h3>
            <h4>University of Wild Chicken</h4>
            <p>
              Graduated with First Class Honors • GPA: 4.0/4.0<br />
            </p>
          </div>
        </div>

        {/* Add more degrees by copying the block above */}
      </div>
    </section>
  );
};

export default Education;