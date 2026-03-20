import Hero from '../../Components/Hero/Hero'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import ProjectsDiv from '../../Components/ProjectsDiv/ProjectsDiv'

export default function Home() {


    return (
        <div className='page-content'>
            <Hero />
            <div>
            <h3><span className="about-label">&gt; projects</span></h3>
            <ProjectsDiv />
            </div>
        </div>
    )
}