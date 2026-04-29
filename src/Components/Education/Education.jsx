import './Education.css'
import periods from '../../data/education.js'

export default function Education() {
  return (
    <div className="about-card">
      <p><span className="about-label">&gt; education</span></p>
      <h3 className='edu-header'>Fullstack web development, Nackademin, 2025-2027</h3>

      <div className="edu-timeline">
        {periods.map((p) => (
          <div key={p.year} className="edu-period">
            <span className="edu-year">{p.year}</span>
            <div className="edu-content">
              <p className="edu-title">{p.title}</p>
              {p.desc.map((d, index) => (
                <p key={index} className="edu-desc">&gt; {d}</p>
              ))}
              
              <div className="course-pills">
                {p.courses.map((c) => (
                  <span key={c} className="course-pill">{c}</span>
                ))}
                {p.highlight && (
                  <span className="course-pill course-pill--highlight">{p.highlight}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="progression-block">
        <p><span className="about-label">&gt; progression</span></p>
        <div className="progression">
          <div>
            <p className="prog-label">// beginning</p>
            <p className="prog-then">Static HTML websites, </p>
          </div>
          <span className="prog-arrow">→</span>
          <div>
            <p className="prog-label">// nu</p>
            <p className="prog-now">Komponentbaserad React, fullstack MERN, deploy till produktion</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}