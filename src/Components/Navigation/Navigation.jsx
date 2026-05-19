import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const CV_FILE = '/CV-maj2026.pdf';
const CV_DOWNLOAD_NAME = 'Lukas_Dannemann_CV.pdf';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
  ];

  return (
    <header className='navbar'>
      <NavLink to='/' className='logo-link' aria-label='Home'>
        <svg
          className='logo-svg'
          viewBox='0 0 64 64'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <g
            fill='none'
            stroke='currentColor'
            strokeWidth='8'
            strokeLinecap='butt'
            strokeLinejoin='miter'
          >
            <path d='M 16 29 L 16 16 L 36 16 A 16 16 0 0 1 36 48' />
            <path d='M 16 35 L 16 48 L 30 48' />
          </g>
        </svg>
        <p className='tagline'>Web Developer</p>
      </NavLink>

      <button
        className='hamburger'
        onClick={() => setMenuOpen((o) => !o)}
        aria-label='Toggle menu'
        aria-expanded={menuOpen}
        aria-controls='primary-nav'
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav id='primary-nav' className={menuOpen ? 'open' : ''}>
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <a
          href={CV_FILE}
          download={CV_DOWNLOAD_NAME}
          className='cv-button'
          onClick={() => setMenuOpen(false)}
        >
          Download CV
        </a>
      </nav>
    </header>
  );
};

export default Navigation;
