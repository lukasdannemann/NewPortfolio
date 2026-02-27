import './Hero.css'
import profileImg from '../../assets/IMG_hike.JPG'

// components/Hero.jsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
       <p><span className='intro-label'>Name:</span> Lukas Dannemann</p>
       <p><span className='intro-label'>Title: </span> Fullstack Developer</p>
       <p><span className='intro-label'>Education: </span> Nackademin</p>
       <p><span className='intro-label'>Introduction:</span>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officiis aspernatur doloremque 
       cumque explicabo repellat dolorum, quia debitis corrupti cupiditate a
       nimi iusto aperiam eveniet numquam, dicta accusantium quisquam alias quis?</p>
      </div>

      <div className="hero-image">
        <img src={profileImg} alt="Lukas Dannemann" />
      </div>
    </section>
  );
}