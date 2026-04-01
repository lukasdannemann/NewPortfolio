import { MdLocationPin } from 'react-icons/md'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div className="about-card">
      <p><span className="about-label">&gt; about</span></p>

      <p className="about-meta">
        <MdLocationPin />
        <span>Stockholm, Sweden</span>
        <span className="meta-sep">·</span>
        <span>Student @ Nackademin</span>
        <span className="meta-sep">·</span>
        <span className="available">LIA nov 2026 – apr 2027</span>
      </p>

      <p className="about-bio">
        I got into development through a curiosity for how things work behind the scenes, and pretty quickly found myself wanting to build things on my own.
        Since then, I’ve really come to enjoy the whole process. From early ideas to finished products, even if it means figuring things out along the way.
        I’m currently studying fullstack development at Nackademin and I’m now looking for a LIA opportunity where I can keep learning, contribute, and get real experience working with others.
      </p>
    </div>
  )
}