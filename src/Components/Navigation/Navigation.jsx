
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  const navLinks = [
    {label: 'About', to: '/about'},
    {label: 'Projects', to: '/projects'}
  ]

  return(
  <>
  <div className='navbar'>
    <header>
      <NavLink to= '/'><h1>L.D</h1></NavLink>
      <p>Web Developer</p>
    </header>

    <nav>
      {navLinks.map((link) => (
        <NavLink
        key={link.label}
        to={link.to}
        className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
        >
          {link.label}
        </NavLink>
      ))}
      <button className='cv-button' onClick={() => setShowConfirm(true)}>
        Download CV
      </button>
    </nav>
  </div>

  {showConfirm && (
    <div className='cv-overlay' onClick={() => setShowConfirm(false)}>
      <div className='cv-modal' onClick={e => e.stopPropagation()}>
        <p>Vill du ladda ner mitt CV?</p>
        <div className='cv-modal-actions'>
          <a
            href='/CV-jan2026.pdf'
            download='Lukas_Dannemann_CV.pdf'
            className='cv-confirm'
            onClick={() => setShowConfirm(false)}
          >
            Ja, ladda ner
          </a>
          <button className='cv-cancel' onClick={() => setShowConfirm(false)}>
            Avbryt
          </button>
        </div>
      </div>
    </div>
  )}
  </>)

}

export default Navigation;
