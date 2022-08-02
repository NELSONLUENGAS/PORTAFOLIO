import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../scss/components/NavBar.scss';

export default function NavBar(){
    return(
        <div className='navGrid'>
            <div className='navElement1'>
                <span onClick={()=> scroll.scrollTo(1, {duration: 1500})}>Luengas</span>
            </div>
            <div className='navElement2'>
                <div className='navElement2'>
                <Link to='about' smooth={true} duration={1500} offset={0}>
                <span>Sobre Mí</span>
                </Link>
                </div>
                <div className='navElement4'>
                <Link to='projects' smooth={true} duration={1500} offset={10}>
                <span>Proyectos</span>
                </Link>
                </div>
                <div className='navElement3'>
                <Link to='skills' smooth={true} duration={1500} offset={0}>
                <span>Tecnologías</span>
                </Link>
                </div>
                <div className='navElement5'>
                <Link to='contact' smooth={true} duration={1500} offset={-30}>
                <span>Contáctame</span>
                </Link>
                </div>

            </div>
            <div className='navElement6'></div>
        </div>
    )
}