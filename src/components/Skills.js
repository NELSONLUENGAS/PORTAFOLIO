import React,{ useEffect } from 'react';
import skills from '../utils/Skills';
import SkillCard from './SkillCard'
import '../scss/components/Skills.scss';
import { getElements, next, prev } from '../utils/sliderActions';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";


export default function Skills(){
    setInterval(()=>{
        next();
    }, 6000);

    return(
        <div className='skillsGrid' id='skills'>
            <div className='skillsContainer'>
                <button onClick={event => prev(event)}><MdOutlineArrowBackIos/></button>
                <button onClick={event => next(event)}><MdOutlineArrowForwardIos/></button>
                <p>Technologies</p>
                <div className="skillsBody">
                    {skills?.map( (S,i )=> 
                        <div key={i} className='skillCard' > 
                            <SkillCard
                                name={S.name}
                                image={S.image}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}