// src/components/Awards.js
import React from 'react';
import './Awards.css';

const Awards = () => {
  return (
    <section className="awards-section">
      <div className="awards-card">
        <h2>Awards & Honors</h2>

        <div className="award-item">
          <div className="award-year">2026 - 2030</div>
          <div className="award-details">
            <h3>Hong Kong PhD Fellowship Scheme (HKPFS)</h3>
            <h4>Hong Kong Research Grants Council</h4>
            <p>Selected as one of 400 recipients worldwide in a highly competitive scheme (over 10,000 applications)</p>
            <p>Stipend: HK$344,400 per year (renewable for 4 years)</p>
            <p>Conference & Research Travel Allowance: HK$14,400 per year</p>
          </div>
        </div>

        <div className="award-item">
          <div className="award-year">2026</div>
          <div className="award-details">
            <h3>HKUST RedBird PhD Recruitment Award</h3>
            <h4>The Hong Kong University of Science and Technology</h4>
            <p>Recruitment Award of HK$40,000</p>
          </div>
        </div>

        

        
        <div className="award-item">
          <div className="award-year">2025/26</div>
          <div className="award-details">
            <h3>School of Engineering Excellent Student Scholarship</h3>
            <h4>The Hong Kong University of Science and Technology</h4>
            <p>Award of HK$10,000</p>
          </div>
        </div>

        <div className="award-item">
          <div className="award-year">2024/25</div>
          <div className="award-details">
            <h3>Targeted Taught Postgraduate Programmes Fellowships Scheme</h3>
            <h4>University Grants Committee</h4>
            <p>Fellowship of HK$120,000</p>
          </div>
        </div>

        <div className="award-item">
          <div className="award-year">2024</div>
          <div className="award-details">
            <h3>Gold Award - Undergraduate Research Opportunities Program </h3>
            <h4>Department of Mathematics, the Chinese University of Hong Kong</h4>
          </div>
        </div>

        <div className="award-item">
          <div className="award-year">2023/24</div>
          <div className="award-details">
            <h3>Dean's honour list</h3>
            <h4>The Chinese University of Hong Kong</h4>
          </div>
        </div>

        
        <div className="award-item">
          <div className="award-year">2020</div>
          <div className="award-details">
            <h3>Admission Scholarship and Honors at Entrance</h3>
            <h4>The Chinese University of Hong Kong</h4>
          </div>
        </div>

        <div className="award-item">
          <div className="award-year">2020</div>
          <div className="award-details">
            <h3>Mathematics scholarship</h3>
            <h4>Department of Mathematics, the Chinese University of Hong Kong</h4>
            <p>Award of HK$20,000</p>
          </div>
        </div>

        <div className="award-item">
          <div className="award-year">2019/20</div>
          <div className="award-details">
            <h3>Sir Edward Youde Memorial Prizes</h3>
            <h4>Sir Edward Youde Memorial Fund Council</h4>
          </div>
        </div>

        <div className="award-item">
          <div className="award-year">2017 - 2020</div>
          <div className="award-details">
            <h3>Mona Yat-wah Fong Outstanding Student Award and Academic Award</h3>
            <h4>Cheng Chek Chee Secondary School of Sai Kung & Hang Hau District, N.T</h4>
            <p>Award of HK$150,000</p>
          </div>
        </div>



        


        {/* Add more awards here */}
      </div>
    </section>
  );
};

export default Awards;