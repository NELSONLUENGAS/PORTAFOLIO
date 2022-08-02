import React from 'react';
import profile from '../images/profile.png'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import pdf from '../images/Curriculum.pdf';
import '../scss/components/AboutMe.scss';
import NavBar from './NavBar';

export default function AboutMe(){
    return(
        <div className='aboutGrid'>
            <div className='aboutContainer'>
                <img src={profile} alt='profile'/>
                <div className="aboutText">
                    <span>
                        Desarrollador Web
                    </span>
                    <span>
                        Full Stack
                    </span>
                    <span>Hola, soy Nelson Andrés</span>
                </div>
                <div className="aboutButton">
                    <a href={pdf} download>
                        <button>
                            Descargar CV
                        </button>
                        <span>
                            <CloudDownloadIcon/>
                        </span>
                    </a>
                </div>
                <div className="aboutPolygon">
                    <div className='abaoutNavBar'>
                        <NavBar/>
                    </div>
                </div>
            </div>
        </div>
    )
}