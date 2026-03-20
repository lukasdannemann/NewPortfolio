import './Education.css'

const periods = [
  {
    year: '2025 aug–dec',
    title: 'Basics — web development with JavaScript',
    desc: 'HTML/CSS, basic JS, version control with Git.',
    courses: ['HTML & CSS', 'JavaScript', 'Git & GitHub', 'React', 'Scrum'],
  },
  {
    year: '2026 jan–may',
    title: 'Fullstack — backend & databaser',
    desc: 'Node.js, Express, MongoDB. Kopplar ihop frontend och backend i egna projekt.',
    courses: ['Node.js', 'Express', 'MongoDB', 'Auth / JWT'],
  },
  {
    year: '2025–2026',
    title: 'LIA & examensprojekt',
    desc: 'Praktik ute i arbetslivet följt av självständigt examensprojekt. Allt jag lärt mig i ett riktigt sammanhang.',
    courses: [],
    highlight: 'LIA-plats sökes',
  },
]

export default function Education() {
  return (
    <div className="about-card">
      <p><span className="about-label">&gt; utbildning</span></p>

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