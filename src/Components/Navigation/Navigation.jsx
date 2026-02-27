
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {

  const navLinks = [
    {label: 'About me', to: '/about'},
    {label: 'Projects', to: '/projects'},
    {label: 'CV', to: '/'}
  ]

  return(
  <>
  <div className='navbar'>
    <header>
      <NavLink to= '/'><h1>L/D</h1></NavLink>
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

    </nav>
  </div>
  </>)
 
}

export default Navigation;