import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/UiverseButton.css';

const UiverseButton = ({ children, to, href, onClick, variant = 'yellow', className = '' }) => {
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

  // Untuk link eksternal (contoh: Demo atau GitHub Repo)
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={btnClass}>
        {innerContent}
      </a>
    );
  }

  // Untuk tombol aksi onClick biasa
  return (
    <button type="button" onClick={onClick} className={btnClass}>
      {innerContent}
    </button>
  );
};

export default UiverseButton;
