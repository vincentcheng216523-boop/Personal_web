// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-simple">
      <img 
        src="/icon.jpg" 
        alt="Your Name" 
        className="hero-photo" 
      />
      
      <div className="hero-text">
        <h1>Hi, I'm CHENG Kit Shun, Vincent.</h1>
        <p>
          I'm an <strong>INFP</strong>. ~~~~<br />
          Not ENFP <br />
          Not INFJ <br />
          Not ENFJ <br />
          Not INTP <br />
          But <strong>INFP</strong>!!! <br />
        </p>
      </div>
    </div>
  );
};

export default Hero;   