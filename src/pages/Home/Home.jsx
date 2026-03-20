import Hero from '../../Components/Hero/Hero'
import ProjectsDiv from '../../Components/ProjectsDiv/ProjectsDiv'
import './Home.css'

export default function Home() {


    return (
        <div className='page-content'>
            <p className='small-header'><span className="about-label">&gt; intro</span></p>
            <Hero />
            <div className='projects-home'>
            <p className='small-header'><span className="about-label">&gt; projects</span></p>
            <ProjectsDiv />
            </div>
        </div>
    )
}