import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">

        <div className="footer-links">
          <a href="mailto:lukasdannemann@outlook.com" className="footer-link" aria-label="Email">
            <MdEmail />
            <span>lukasdannemann@outlook.com</span>
          </a>
          <a href="https://github.com/lukasdannemann" target="_blank" rel="noreferrer" className="footer-link" aria-label="GitHub">
            <FaGithub />
            <span>github.com/lukasdannemann</span>
          </a>
          <a href="https://linkedin.com/in/lukas-dannemann" target="_blank" rel="noreferrer" className="footer-link" aria-label="LinkedIn">
            <FaLinkedin />
            <span>linkedin.com/in/lukas-dannemann</span>
          </a>
        </div>

      <div className="footer-bottom">
        <span className="footer-muted">© {new Date().getFullYear()} Lukas Dannemann</span>
        <span className="footer-muted footer-status">
          <span className="status-dot" />
          Open for internship nov 2026 – apr 2027
        </span>
      </div>
    </footer>
  )
}
