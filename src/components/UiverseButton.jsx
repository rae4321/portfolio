import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/UiverseButton.css';

const UiverseButton = ({ 
  children, 
  to, 
  href, 
  onClick, 
  type = 'button', 
  download = false, 
  variant = 'yellow', 
  className = '' 
}) => {
  // Daftar varian warna yang tersedia (yellow sebagai default, ditambah blue & yellowgreen)
  const variantClasses = {
    blue: 'btn-blue',
    yellowgreen: 'btn-yellowgreen',
  };

  const btnClass = `uiverse-retro-btn ${variantClasses[variant] || ''} ${className}`;

  const innerContent = (
    <div>
      <span>{children}</span>
    </div>
  );

  // Untuk navigasi halaman internal (contoh: to="/" atau to="/404")
  if (to) {
    return (
      <Link to={to} className={btnClass}>
        {innerContent}
      </Link>
    );
  }

  // Untuk link eksternal (Demo/GitHub), anchor (#proyek), atau unduhan file (Download CV)
  if (href) {
    const isAnchor = href.startsWith('#');

    const handleAnchorClick = (e) => {
      if (isAnchor) {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (onClick) onClick(e);
    };

    return (
      <a
        href={href}
        onClick={handleAnchorClick}
        download={download}
        target={download || isAnchor ? undefined : '_blank'}
        rel={download || isAnchor ? undefined : 'noopener noreferrer'}
        className={btnClass}
      >
        {innerContent}
      </a>
    );
  }

  // Untuk tombol aksi onClick biasa maupun submit form (type="submit")
  return (
    <button type={type} onClick={onClick} className={btnClass}>
      {innerContent}
    </button>
  );
};

export default UiverseButton;