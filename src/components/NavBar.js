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
            <span onClick={()=> scroll.scrollTo(1, {duration: 1500})}>About Me</span>
                <button>
                    <InfoIcon/>
                </button>
            </div>
            <div className='navElement3'>
            <span onClick={()=> scroll.scrollTo(800,{duration: 1500})}>Skills</span>
                <button>
                    <LaptopMacIcon/>
                </button>
            </div>
            <div className='navElement4'>
            <span onClick={()=> scroll.scrollTo(1730,{duration: 1500})}>Projects</span>
                <button>
                    <WorkIcon/>
                </button>
            </div>
            <div className='navElement5'>
            <span onClick={()=> scroll.scrollTo(3000, {duration: 1500})}>Contact Me</span>
                <button>
                    <ContactPhoneIcon/>
                </button>
            </div>
            <div className='navElement6'></div>
        </div>
    )
}