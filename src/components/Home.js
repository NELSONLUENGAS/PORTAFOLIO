import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Text from './Text';
import '../scss/components/Home.scss';


export default function Home(){
    return(
        <div className='homeGrid'>
            <div className='homeElement2'>
                <AboutMe/>
                <Text/>
                <Projects />
                <Skills/>
                <ContactMe />
            </div>
        </div>
    )
}