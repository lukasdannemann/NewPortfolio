import './ProjectCard.css'

export default function ProjectCard({project}) {

    const { type, title, description, image, badges, liveUrl, githubUrl } = project;
    console.log(project)

    return (
        <>
            <div className="card">
                <div className="card-thumb">
                    <img src={image} alt={title} />
                    <span className="card-type">{type}</span>
                </div>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-desc">
                        {description}
                    </p>
                    <div className="card-badges">
                        {badges.map((badge) => (
                            <span key={badge} className='badge'>{badge}</span>
                        ))}
                    </div>
                </div>
                <div className="card-footer">
                    <a className="card-link" href={liveUrl}>
                        Live site <span class="arrow">↗</span>
                    </a>
                    <a className="card-github" href={githubUrl}>GitHub →</a>
                </div>
            </div>
        </>
    )
}