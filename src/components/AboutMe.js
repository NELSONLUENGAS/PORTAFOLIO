import React from 'react';
import profile from '../images/profile.png'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import pdf from '../images/Curriculum.pdf';
import '../scss/components/AboutMe.scss';

export default function AboutMe(){
    return(
        <div className='aboutGrid'>
            <div className='aboutContainer'>
                <div className='aboutElement1'>
                    <img src={profile} alt='profile'/>
                    <button>
                        <a style={{textDecoration: 'none', color: 'white'}} href={pdf} download>Download CV</a>
                        <span>
                            <CloudDownloadIcon/>
                        </span>
                    </button>
                </div>
                <div className='aboutElement2'>
                    <div>
                    <h2>Hola soy Nelson Andrés Luengas Silva</h2>
                    <h8> Desarrollador Full Stack Web Developer con capacidad de trabajar en Front-End como en Back-End,
                        de forma modularizada y escalable, para generar un mejor trabajo y desarrollo de proyectos en equipo, 
                        manejando la mejor compresión visual, ordenada y amigable para todos
                    </h8>
                    </div>
                </div>
            </div>
        </div>
    )
}