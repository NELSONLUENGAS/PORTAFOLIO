import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../scss/components/ContactMe.scss';

export default function ContactMe(){
    return(
        <div className='contactGrid' id='contact'>
        <div className='contactContainer'>
        <div className='contactElement1'>
            <h2>Contact Me¡¡ 😎</h2>
        </div>
        <div className='contactForm'>
            <textarea></textarea>
            <br></br>
            <button>Enviar</button>
            <br></br>
            <br></br>
        </div>
        <div className='social'>
        <div className='whatsApp' onClick={()=> window.location.href = 'https://wa.link/1y88f3'}>
            <span>WhatsApp</span>
            <button>
                <WhatsAppIcon/>
            </button>
        </div> 
        <div className='gmail'>
            <a style={{textDecoration: 'none', color: 'white'}} href='mailto:Nelsonluengas2@gmail.com'>Gmail</a>
            <button>
                <EmailIcon/>
            </button>
        </div>
        <div className='linkedIn' onClick={()=> window.location.href = 'https://www.linkedin.com/in/nelsonluengas'}>
            <span>LikendIn</span>
            <button>
                <LinkedInIcon/>
            </button>
        </div>
        <div className='gitHub' onClick={()=> window.location.href = 'https://github.com/NELSONLUENGAS'}>
            <span>GitHub</span>
            <button>
                <GitHubIcon/>
            </button>
        </div>
        </div>
        <div className='copyRight'> Nelson Andrés Luengas Silva - 2022   ©️ CopyRigth</div>
        </div>
    </div>
    )
}