import projects from "../../data/projects"
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import './ProjectsDiv.css'

export default function ProjectsDiv(){

    return(
        <>
        <div>
            <h1>Projekt</h1>
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