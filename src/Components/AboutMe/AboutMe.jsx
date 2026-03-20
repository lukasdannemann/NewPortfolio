import { MdLocationPin } from 'react-icons/md'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div className="about-card">
      <p><span className="about-label">&gt; about</span></p>

      <p className="about-meta">
        <span className="status-dot" />
        <MdLocationPin />
        <span>Stockholm, Sweden</span>
        <span className="meta-sep">·</span>
        <span>Student @ Nackademin</span>
        <span className="meta-sep">·</span>
        <span className="available">LIA nov 2026 – apr 2027</span>
      </p>

      <p className="about-bio">
        I got into development through a curiosity for how things work on the web — and quickly got
        hooked on building my own. Today, I'm a frontend-focused fullstack developer in training who
        enjoys working through the entire process, from early ideas to finished products.
      </p>
    </div>
  )
}