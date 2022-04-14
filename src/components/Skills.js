import React from 'react';
import skills from '../utils/Skills';
import SkillCard from './SkillCard'
import '../scss/components/Skills.scss';

export default function Skills(){
    return(
        <div className='skillsGrid'>
            <div className='skillsContainer'>
                {skills?.map( (S,i )=> 
                    <SkillCard
                        key={i}
                        name={S.name}
                        image={S.image}
                    />
                )}
            </div>
        </div>
    )
}