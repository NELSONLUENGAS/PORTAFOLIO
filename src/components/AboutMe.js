import React from 'react';
import profile from '../images/profile.png'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import pdf from '../images/Curriculum.pdf';
import '../scss/components/AboutMe.scss';

export default function AboutMe(){
    return(
        <div className='aboutGrid' id='about'>
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
                    <h2>Hola mi nombre es Nelson Andrés Luengas Silva</h2>
                    <h6>Soy Desarrollador Web Full Stack con capacidades para trabajar en Front-End como en Back-End,
                        también puedo trabajar en diferentes tecnologías como React, Node, SQL, etc. Apasionado por la
                        tecnología y la programación, me gusta aprender nuevas tecnologías y mejorar mis habilidades,
                        además de la pasión que tengo por la música soy músico profesional. 
                        En cuanto a relaciones humanas, me gusta trabajar en equipo, soy compañerista, respetuoso 
                        y con mucha iniciativa. 
                    </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}