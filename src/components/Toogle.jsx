import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react'; // Impor ikon
import './CSS/Toogle.css';

const Toogle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button 
      className="toggle-theme-btn" 
      onClick={() => setIsDarkMode(!isDarkMode)}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="icon-sun" size={24} />
      ) : (
        <Moon className="icon-moon" size={24} />
      )}
    </button>
  );
};

export default Toogle;