import React from 'react';
import image from '../images/2.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import '../scss/components/Projects.scss';

export default function Projects(){
    return(
        <div className='projectGrid' id='projects'>
            <div className='projectContainer'>
                <div className='project'>
                <img src={image} alt='icono1'/>
                <button onClick={()=> window.location.href = 'https://github.com/NELSONLUENGAS/PI_COUNTRIES'}>
                    <GitHubIcon/>
                </button>
                <button>
                    <LanguageIcon/>
                </button>
                </div>
                <div className='project'>
                <img src={image} alt='icono1'/>
                <button>
                    <GitHubIcon/>
                </button>
                <button>
                    <LanguageIcon/>
                </button>
                </div>
                <div className='project'>
                <img src={image} alt='icono1'/>
                <button>
                    <GitHubIcon/>
                </button>
                <button>
                    <LanguageIcon/>
                </button>
                </div>
                <div className='project'>
                <img src={image} alt='icono1'/>
                <button>
                    <GitHubIcon/>
                </button>
                <button>
                    <LanguageIcon/>
                </button>
                </div>
                <div className='project'>
                <img src={image} alt='icono1'/>
                <button>
                    <GitHubIcon/>
                </button>
                <button>
                    <LanguageIcon/>
                </button>
                </div>
            </div>
        </div>
    )
}