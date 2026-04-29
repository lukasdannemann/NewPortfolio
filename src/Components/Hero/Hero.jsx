import './Hero.css'
import profileImg from '../../assets/IMG_hike.JPG'
import { MdLocationPin } from 'react-icons/md'

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">
        <p><span className="hero-name">Lukas Dannemann</span></p>
        <p className="hero-location"><MdLocationPin /><span>Stockholm, Sweden</span></p>

        <hr className="hero-divider" />

        <p>
          <span className="intro-label">&gt; title</span>
          Fullstack Web Developer
        </p>
        <p>
          <span className="intro-label">&gt; stack</span>
          MERN (MongoDB - Express - React - Node.js)
        </p>
        <p>
          <span className="intro-label">&gt; status</span>
          Student @ Nackademin
        </p>
        <p>
          <span className="intro-label">&gt; looking for</span>
          <span className="available">Internship november 2026 – april 2027</span>
        </p>

        <hr className="hero-divider" />

        <a className="contact-link" href="mailto: lukas.dannemann@yh.nackademin.com">
          <span className="arrow">&gt;</span> contact me
        </a>
      </div>

      <div className="hero-image">
        <img src={profileImg} alt="Lukas Dannemann" />
      </div>

    </section>
  )
}