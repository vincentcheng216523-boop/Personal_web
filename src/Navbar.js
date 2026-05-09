// src/components/Navbar.js
import React, { useState } from 'react';
import { useEffect } from 'react';
import './Navbar.css';
import { Sun, Moon, Menu, X } from 'lucide-react'; // You'll need to install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  });

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Name */}
        <div className="navbar-logo">
          <a href="/">Vincent's Web</a>
        </div>

        {/* Desktop Menu */}
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About Me</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>CV</a></li>
          <li><a href="#blog" onClick={() => setIsOpen(false)}>Travel Blog</a></li>
          <li><a href="#photograph" onClick={() => setIsOpen(false)}>Photograph</a></li>

          {/* Dark Mode Toggle - visible on mobile too */}
          <li className="dark-mode-toggle mobile-only">
            <button onClick={toggleDarkMode} className="theme-btn">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>

        {/* Right side actions */}
        <div className="navbar-actions">
          {/* Dark Mode Toggle (Desktop) */}
          <button onClick={toggleDarkMode} className="theme-btn desktop-only">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hamburger Menu (Mobile) */}
          <button className="hamburger" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;