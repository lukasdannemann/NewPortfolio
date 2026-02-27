import projects from "../../data/projects"
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import './ProjectsDiv.css'

export default function ProjectsDiv(){

    return(
        <>
        <div>
            <h2>Projekt</h2>
           <section className="projectsDiv">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
            </section> 
            <div>

            </div>
        </div>
        
        </>
    )
}