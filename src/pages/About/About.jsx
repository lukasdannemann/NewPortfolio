import AboutMe from '../../Components/AboutMe/AboutMe'
import Education from '../../Components/Education/Education'
import PersonalLife from '../../Components/PersonalLife/PersonalLife'
import './About.css'

export default function About() {
  return (
    <div className="page-content">
      <AboutMe />
      <Education />
      <PersonalLife />

      <div className="about-card about-card--slim">
        <a className="contact-link" href="mailto: lukas.dannemann@yh.nackademin.com">
          <span className="arrow">&gt;</span> contact me
        </a>
      </div>
    </div>
  )
}