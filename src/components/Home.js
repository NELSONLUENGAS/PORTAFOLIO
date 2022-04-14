import React from 'react';
import NavBar from './NavBar'; 
import AboutMe from './AboutMe';
import Skills from './Skills';
import ContactMe from './ContactMe';
import Projects from './Projects';
import '../scss/components/Home.scss';


export default function Home(){
    return(
        <div className='homeGrid'>
            <div className='homeElement1'>
                <NavBar/>   
            </div>
            <div className='homeElement2'>
                <AboutMe/>
                <Skills/>
                <Projects />
                <ContactMe />
            </div>
        </div>
    )
}