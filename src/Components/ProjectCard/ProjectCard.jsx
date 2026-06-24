import { useState } from 'react';
import './ProjectCard.css'

export default function ProjectCard({ project, expanded = false }) {
    const [showFull, setShowFull] = useState(false);

    const { type, title, shortDescription, longDescription, image, badges, liveUrl, githubUrl } = project;

    const hasMore = longDescription && longDescription.length > 1;

    return (
        <div className="card">
            <div className="card-thumb">
                <img src={image} alt={title} />
                <span className="card-type">{type}</span>
            </div>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                {!expanded && <p className="card-desc">{shortDescription}</p>}

                {expanded && longDescription && (
                    <div className={`card-desc long ${showFull ? 'is-open' : ''}`}>
                        <p className="card-desc-first">{longDescription[0]}</p>

                        {showFull && longDescription.slice(1).map((paragraph, i) => (
                            <p key={`extra-${i}`}>{paragraph}</p>
                        ))}

                        {hasMore && (
                            <button
                                type="button"
                                className="card-toggle"
                                onClick={() => setShowFull(s => !s)}
                                aria-expanded={showFull}
                            >
                                {showFull ? 'Show less ↑' : 'Read more ↓'}
                            </button>
                        )}
                    </div>
                )}

                <div className="card-badges">
                    {badges.map((badge) => (
                        <span key={badge} className='badge'>{badge}</span>
                    ))}
                </div>
            </div>
            <div className="card-footer">
                <a className="card-link" target='_blank' href={liveUrl}>
                    Live site <span className="arrow">↗</span>
                </a>
                {githubUrl && <a className="card-link" target='_blank' href={githubUrl}>GitHub ↗</a>}
                
                {!expanded && (
                    <a className="card-link" href="/projects">Show more →</a>
                )}
            </div>
        </div>
    )
}
