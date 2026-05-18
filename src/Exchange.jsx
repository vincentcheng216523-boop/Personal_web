// src/components/Exchange.js
import React from 'react';
import './Exchange.css';
import NCUlogo from './assets/NCU-logo.png';   // ← This is the correct path now
import lillelogo from './assets/lille-logo.png';   // ← This is the correct path now

const Exchange = () => {
  return (
    <section className="exchange-section">
      <div className="exchange-card">          
        <h2>Exchange Experience</h2>
        <div className="exchange-item">
          <div className="exchange-left">     {/* ← New wrapper */}
            <div className="exchange-year">2024 Summer</div>
            <div className="exchange-details">
              <h3>Exchange student</h3>
              <h4>Université Catholique de Lille, France</h4>
              <p>Completed A1 French certification while immersing in French art and cinema</p>
              <p>Travel allowance: HK$35,000</p>
            </div>
          </div>

          <img 
            src={lillelogo} 
            alt="Lille Logo" 
            className="university-logo-exchange"
          />
        </div>

        <div className="exchange-item">
          <div className="exchange-left">     {/* ← New wrapper */}
            <div className="exchange-year">2023 Summer</div>
            <div className="exchange-details">
              <h3>Research intern</h3>
              <h4>Scientific and parallel computing laboratory, National Central University</h4>
              <p>Supported by the university system of Taiwan</p>
              <p>Travel allowance: HK$10,000</p>
            </div>
          </div>

          <img 
            src={NCUlogo} 
            alt="NCU Logo" 
            className="university-logo-exchange"
          />
        </div>

              <div className="exchange-item">
          <div className="exchange-left">     {/* ← New wrapper */}
            <div className="exchange-year">2023 Dec & 2024 Jun</div>
            <div className="exchange-details">
              <h3>Two short-term exchanges visiting</h3>
              <h4>Nanjing university and Xinjiang Medical University</h4>
              <p>Intercultural dialogue with minority groups including Uyghur and Kazakh communities</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    
  );
};

export default Exchange;