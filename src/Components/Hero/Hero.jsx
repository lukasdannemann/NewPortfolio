import './Hero.css'
import profileImg from '../../assets/IMG_hike.JPG'
import { MdLocationPin } from 'react-icons/md'

// components/Hero.jsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <div>
          <p className='header-name'> Lukas Dannemann</p>
          <p className='about-meta'><MdLocationPin className='location-pin'/><span>Stockholm, Sweden</span></p>
        </div>
       
       <p><span className='intro-label'>&gt; title</span></p>
       <p>Fullstack Web Developer</p>
       <p><span className='intro-label'>&gt; stack</span></p>
       <p>MERN (MongoDB - Express - React - Node.js)</p>
       <p><span className='intro-label'>&gt; status</span></p>
       <p>Student @ Nackademin</p>
       <p><span className='intro-label'>&gt; looking for</span></p>
       <p>Internship <span className='available'>november 2026 - april 2027</span></p>
        <a className="contact-link" href="#">
          <span><span className='arrow'>&gt;</span> contact me</span>
        </a>
      </div>

      <div className="hero-image">
        <img src={profileImg} alt="Lukas Dannemann" />
      </div>
    </section>
  );
}