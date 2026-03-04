import projects from "../../data/projects"
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import './ProjectsDiv.css'

export default function ProjectsDiv({ expanded = false }) {
    return (
        <div>
            <section className={`projectsDiv ${expanded ? 'projectsDiv--expanded' : ''}`}>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} expanded={expanded} />
                ))}
            </section>
        </div>
    )
}