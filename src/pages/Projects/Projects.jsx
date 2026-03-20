import ProjectsIntro from '../../Components/ProjectsIntro/ProjectsIntro'
import ProjectsDiv from '../../Components/ProjectsDiv/ProjectsDiv'

export default function Projects() {
    return (
        <div className='page-content'>
            <ProjectsIntro />
            <ProjectsDiv expanded />
        </div>
    )
}