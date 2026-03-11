import ProjectsDiv from '../../Components/ProjectsDiv/ProjectsDiv'


export default function Projects(){

    return(
        <>
        <div>
            <p><span className='intro-label'>&gt; projects</span></p>
            <p>Frontend-focused work from the first semester of my fullstack education. 
                More to come as I dive deeper into the backend.
                
            </p>
        </div>
        <ProjectsDiv expanded/>
        </>
    )
}