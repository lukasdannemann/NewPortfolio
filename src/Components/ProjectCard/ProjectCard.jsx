import './ProjectCard.css'

export default function ProjectCard({ project, expanded = false }) {

    const { type, title, shortDescription, longDescription, image, badges, liveUrl, githubUrl } = project;

    return (
        <>
            <div className="card">
                <div className="card-thumb">
                    <img src={image} alt={title} />
                    <span className="card-type">{type}</span>
                </div>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    {!expanded && <p className="card-desc">{shortDescription}</p>}

                    {expanded && longDescription && (
                        <div className="card-desc long">
                            {longDescription.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    )}

                    <div className="card-badges">
                        {badges.map((badge) => (
                            <span key={badge} className='badge'>{badge}</span>
                        ))}
                    </div>
                </div>
                <div className="card-footer">
                    {!expanded && (
                        <a className="card-link" href="/projects">Visa mer →</a>
                    )}
                    <a className="card-link" target='_blank' href={liveUrl}>
                        Live site <span className="arrow">↗</span>
                    </a>
                    <a className="card-github" target='_blank' href={githubUrl}>GitHub →</a>
                </div>
            </div>
        </>
    )
}