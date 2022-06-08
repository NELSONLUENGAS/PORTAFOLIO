import React from 'react';
import image from '../images/2.jpg';
import image1 from '../images/image.png';
import image2 from '../images/image0.png';
import image3 from '../images/1.jpeg';
import image4 from '../images/urban.jpeg';
import image5 from '../images/airline.jpeg';
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
                    <img src={image1} alt='icono1'/>
                    <button onClick={()=> window.location.href = 'https://github.com/NELSONLUENGAS/E-Comerce_ProyectoFinal'}>
                        <GitHubIcon/>
                    </button>
                    <button onClick={()=> window.location.href = 'https://ecommerce-app-fawn.vercel.app'}>
                        <LanguageIcon/>
                    </button>
                </div>
                <div className='project'>
                    <img src={image2} alt='icono1'/>
                    <button onClick={()=> window.location.href = 'https://github.com/NELSONLUENGAS/PORTAFOLIO'}>
                        <GitHubIcon/>
                    </button>
                    <button onClick={()=> window.location.href = 'https://nelson-portafolio.vercel.app/'}>
                        <LanguageIcon/>
                    </button>
                </div>
                <div className='project'>
                    <img src={image3} alt='icono1'/>
                    <button onClick={()=> window.location.href = 'https://github.com/NELSONLUENGAS/Pokemon_App'}>
                        <GitHubIcon/>
                    </button>
                    <button >
                        <LanguageIcon/>
                    </button>
                </div>
                <div className='project'>
                    <img src={image4} alt='icono1'/>
                    <button onClick={()=> window.location.href = 'https://github.com/NELSONLUENGAS/URBAN_SHOP'}>
                        <GitHubIcon/>
                    </button>
                    <button onClick={()=> window.location.href = 'https://urban-shop.vercel.app/'}>
                        <LanguageIcon/>
                    </button>
                </div>
                <div className='project'>
                    <img src={image5} alt='icono1'/>
                    <button onClick={()=> window.location.href = 'https://github.com/NELSONLUENGAS/AIRLINE'}>
                        <GitHubIcon/>
                    </button>
                    <button onClick={()=> window.location.href = 'https://airline-nine.vercel.app/'}>
                        <LanguageIcon/>
                    </button>
                </div>
            </div>
        </div>
    )
}
