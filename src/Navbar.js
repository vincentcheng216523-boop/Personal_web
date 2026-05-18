import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">Vincent's Web</Link>
        </div>

        {/* Desktop Menu - Always visible */}
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Travel Blog</Link></li>
          <li><Link to="/vlog">Daily Vlog</Link></li>
          <li><Link to="/photography">Photograph</Link></li>
        </ul>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="theme-btn">
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;