import React from 'react';
import icon from './assets/icon.jpg';   // ← This is the correct path now
import './Hero.css';
import { Instagram, Mail } from 'lucide-react';
const Hero = () => {
  return (
    <div className="hero-simple">
      <img 
        src={icon} 
        alt="Vincent Cheng" 
        className="hero-photo"
        onError={(e) => {
          console.log("❌ Image failed to load");
          e.target.style.display = 'none';
        }}
        onLoad={() => console.log("✅ Image loaded successfully!")}
      />
      
      <div className="hero-text">
        <h1>Hi, I'm CHENG Kit Shun, Vincent.</h1>
        <p>
          I am a first-year PhD student in Computer Science and Engineering at The Hong Kong University of Science and Technology (HKUST), starting in September 2026 under the supervision of Prof. Raymond Chi-Wing Wong. My research focuses on Artificial Intelligence, particularly the integration of AI techniques into database systems.
        </p>
        <p>I enjoy photography, playing pool, travelling and visiting historical places. Please feel free to explore my blog and photography portfolio! I'm also open for a coffee chat!</p>
      
      <div className="social-links">
          <a 
            href="https://www.instagram.com/vincent_030_0/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Instagram size={28} />
          </a>
          
          <a 
            href="mailto:kschengae@connect.ust.hk" 
            className="social-icon"
          >
            <Mail size={28} />
          </a>
        </div>
    </div></div>
  );
};

export default Hero;