import './About.css'
import { MdLocationPin } from 'react-icons/md'

// Byt ut dessa mot dina riktiga bilder när du har dem
// import img1 from '../../assets/foto1.jpg'
// import img2 from '../../assets/foto2.jpg'
// import img3 from '../../assets/foto3.jpg'

export default function About() {
  return (
    <div className="about-page">

      {/* KORT INTRO */}
      <div className="about-card">
        <p><span className="about-label">&gt; about</span></p>
        <p className="about-meta">
          <span className="status-dot" />
          <MdLocationPin />
          <span>Stockholm, Sweden</span>
          <span className="meta-sep">·</span>
          <span>Student @ Nackademin</span>
          <span className="meta-sep">·</span>
          <span className="available">LIA nov 2026 - april 2027</span>
        </p>
        <p className="about-bio">
          I got into development through a curiosity for how things work on the web — and quickly got hooked on building my own.
          Today, I’m a frontend-focused fullstack developer in training who enjoys working through the entire process, from early ideas to finished products.
        </p>
      </div>

      {/* UTBILDNING */}
      <div className="about-card">
        <p><span className="about-label">&gt; utbildning</span></p>

        <div className="edu-timeline">

          <div className="edu-period">
            <span className="edu-year">2025 aug-dec</span>
            <div className="edu-content">
              <p className="edu-title">Basics — web development with JavaScript</p>
              <p className="edu-desc">
                HTML/CSS, basic JS, version control with Git. 
              </p>
              <div className="course-pills">
                {['HTML & CSS', 'JavaScript', 'Git & GitHub', 'React', 'Scrum'].map(c => (
                  <span key={c} className="course-pill">{c}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="edu-period">
            <span className="edu-year">2026 jan-may</span>
            <div className="edu-content">
              <p className="edu-title">Fullstack — backend & databaser</p>
              <p className="edu-desc">
                Node.js, Express, MongoDB. Kopplar ihop frontend och backend i egna projekt.
              </p>
              <div className="course-pills">
                {['Node.js', 'Express', 'MongoDB', 'Auth / JWT'].map(c => (
                  <span key={c} className="course-pill">{c}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="edu-period">
            <span className="edu-year">2025–2026</span>
            <div className="edu-content">
              <p className="edu-title">LIA & examensprojekt</p>
              <p className="edu-desc">
                Praktik ute i arbetslivet följt av självständigt examensprojekt.
                Allt jag lärt mig i ett riktigt sammanhang.
              </p>
              <div className="course-pills">
                <span className="course-pill course-pill--highlight">LIA-plats sökes</span>
              </div>
            </div>
          </div>

        </div>

        <div className="progression-block">
          <p><span className="about-label">&gt; progression</span></p>
          <div className="progression">
            <div>
              <p className="prog-label">// då</p>
              <p className="prog-then">Statiska HTML-sidor, lösa JS-scripts, ingen struktur</p>
            </div>
            <span className="prog-arrow">→</span>
            <div>
              <p className="prog-label">// nu</p>
              <p className="prog-now">Komponentbaserad React, fullstack MERN, deploy till produktion</p>
            </div>
          </div>
        </div>
      </div>

      {/* BILDER */}
      <div className="about-card">
        <p><span className="about-label">&gt; utanför skärmen</span></p>
        <p className="about-desc">Backpackade Syd- och Centralamerika — planerat lite, upplevt mycket.</p>

        <div className="photo-grid">

          <div className="photo-card photo-card--big">
            {/* När du har bild: ta bort photo-placeholder och avkommentera img-taggen */}
            {/* <img src={img1} alt="Vy från resa" /> */}
            <div className="photo-placeholder">stor bild</div>
            <div className="photo-caption">
              <span className="photo-caption-label">// centralamerika</span>
              Någonstans längs vägen
            </div>
          </div>

          <div className="photo-card photo-card--top">
            {/* <img src={img2} alt="Natur" /> */}
            <div className="photo-placeholder">bild 2</div>
            <div className="photo-caption">
              <span className="photo-caption-label">// natur</span>
              Vandring / utsikt
            </div>
          </div>

          <div className="photo-card photo-card--bottom">
            {/* <img src={img3} alt="Sydamerika" /> */}
            <div className="photo-placeholder">bild 3</div>
            <div className="photo-caption">
              <span className="photo-caption-label">// sydamerika</span>
              Kort beskrivning
            </div>
          </div>

        </div>
      </div>

      {/* CONTACT */}
      <div className="about-card about-card--slim">
        <a className="contact-link" href="#">
          <span className="arrow">&gt;</span> contact me
        </a>
      </div>

    </div>
  )
}
