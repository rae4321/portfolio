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
  const btnClass = `uiverse-retro-btn ${variant === 'blue' ? 'btn-blue' : ''} ${className}`;

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

  // Untuk link eksternal (Demo/GitHub) atau unduhan file (Download CV)
  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={download ? undefined : '_blank'}
        rel={download ? undefined : 'noopener noreferrer'}
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
