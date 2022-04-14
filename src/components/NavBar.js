import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import WorkIcon from '@mui/icons-material/Work';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Link, animateScroll as scroll } from "react-scroll";
import '../scss/components/NavBar.scss';

export default function NavBar(){
    return(
        <div className='navGrid'>
            <div className='navElement1'>
                
                <span onClick={()=> scroll.scrollTo(1, {duration: 1500})}>My Page</span>
            </div>
            <div className='navElement2'>
            <Link to='about' smooth={true} duration={1500} offset={-30}>
            <span>About Me</span>
            </Link>
                <button>
                    <InfoIcon/>
                </button>
            </div>
            <div className='navElement3'>
            <Link to='skills' smooth={true} duration={1500} offset={-30}>
            <span>Skills</span>
            </Link>
                <button>
                    <LaptopMacIcon/>
                </button>
            </div>
            <div className='navElement4'>
            <Link to='projects' smooth={true} duration={1500} offset={-30}>
            <span>Projects</span>
            </Link>
                <button>
                    <WorkIcon/>
                </button>
            </div>
            <div className='navElement5'>
            <Link to='contact' smooth={true} duration={1500} offset={-30}>
            <span>Contact Me</span>
            </Link>
                <button>
                    <ContactPhoneIcon/>
                </button>
            </div>
            <div className='navElement6'></div>
        </div>
    )
}