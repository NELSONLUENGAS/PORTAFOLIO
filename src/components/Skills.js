import React, { useState } from 'react';
import {frontend, backend, lenguajes} from '../utils/Skills';
import SkillCard from './SkillCard'
import '../scss/components/Skills.scss';
import '../scss/components/Styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


export default function Skills(){
    const [state, setState] = useState(frontend);

    function handleOnClick(event){
        event.preventDefault();
        const { name } = event.target;
        console.log(name)
        if(name === 'backend'){
            setState(backend)
        }
        else if(name === 'frontend'){
            setState(frontend)
        }
        else if(name === 'lenguajes'){
            setState(lenguajes)
        }
    }

    return(
        <div className="skills">
            <div id='skills' className="skillsTitle">
                <button onClick={event => handleOnClick(event)} name='frontend'>Frontend</button>
                <button onClick={event => handleOnClick(event)} name='backend'>Backend</button>
                <button onClick={event => handleOnClick(event)} name='lenguajes'>Lenguajes</button>
            </div>
            <div >
                <Swiper
                    slidesPerView={4}
                    pagination={{
                        type: 'progressbar',
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 4000
                    }}
                    className="mySwiper"
                    >
                        {state?.length && state.map( (tool,i )=> 
                                <SwiperSlide key={i}  > 
                                    <SkillCard
                                        name={tool.name}
                                        image={tool.image}
                                    />
                                </SwiperSlide>
                        )}
                </Swiper>
            </div>
        </div>
    )
}