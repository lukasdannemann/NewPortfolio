import './Education.css'
import periods from '../../data/education'

export default function Education() {
  return (
    <div className="about-card">
      <p><span className="about-label">&gt; education</span></p>

      <div className="edu-timeline">
        {periods.map((p) => (
          <div key={p.year} className="edu-period">
            <span className="edu-year">{p.year}</span>
            <div className="edu-content">
              <p className="edu-title">{p.title}</p>
              <p className="edu-desc">{p.desc}</p>
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
  )
}