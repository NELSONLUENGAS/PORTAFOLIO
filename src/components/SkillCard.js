import React from 'react';
import '../scss/components/SkillCard.scss';

export default function SkiillCard({name, image}){
    return (
        <div className='skillCardContainer'>
            <img src={image} alt='Icono'/>
            <h6>{name}</h6>
        </div>
    )
}