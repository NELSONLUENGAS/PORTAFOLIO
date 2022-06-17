import React from 'react';
import { arrayProjects } from '../utils/Projects';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import '../scss/components/Projects.scss';
import { next, prev } from '../utils/projectsAction';

export default function Projects(){
    setInterval(()=>{
        prev()
    }, 10000)
    return(
        <div className='projectGrid' id='projects'>
            <div className='projectContainer'>
                <p>Projects</p>
                <button className="prevPro" onClick={event => prev(event)}><MdOutlineArrowBackIos/></button>
                <button className='nextPro' onClick={event => next(event)}><MdOutlineArrowForwardIos/></button>
                <div className="projectBody">
                        {arrayProjects?.length ?
                            arrayProjects.map( project =>
                                    <div key={project.id} className='project'>
                                        <img src={project.image} alt='project'/>
                                        <a href={project.gitHub} target='_blank' rel='noreferrer'>
                                            <button className='gitHubPro' >
                                                <GitHubIcon/>
                                            </button>
                                        </a>
                                        <a href={project.web} target='_blank' rel='noreferrer'>
                                            <button className='webPro' >
                                                <LanguageIcon/>
                                            </button>
                                        </a>
                                    </div>
                            )
                        : null}
                </div>
            </div>
        </div>
    )
}
