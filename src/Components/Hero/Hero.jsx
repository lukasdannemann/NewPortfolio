import './Hero.css'
import profileImg from '../../assets/IMG_hike.JPG'

// components/Hero.jsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-intro">
            Hej! Jag är <span className="hero-name">Lukas Dannemann</span>, 
            Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
      </div>

      <div className="hero-image">
        <img src={profileImg} alt="Lukas Dannemann" />
      </div>
    </section>
  );
}