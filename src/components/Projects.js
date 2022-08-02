import React from 'react';
import { arrayProjects } from '../utils/Projects';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import '../scss/components/Projects.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/effect-cube";
import "swiper/scss/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper";


export default function Projects(){
    return(
        <div id='projects' className='projects'>
            <div className='project-polygon-1'>
                <span>Ver Código</span>
                <span>Ver Página Web</span>
            </div>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                loop={true}
                cubeEffect={{
                    shadowScale: 0.5,
                }}
                autoplay={{
                    delay: 10000
                }}
                pagination={{
                    clickable: true
                }}
                modules={[EffectCube, Pagination, Autoplay]}
                className="mySwiper"
            >
                {arrayProjects?.length &&
                            arrayProjects.map( project =>
                                    <SwiperSlide>
                                        <img src={project.image} alt="" />
                                        <a href={project.gitHub} target='_blank' rel='noreferrer'>
                                            <button className='gitHubPro' >
                                                <GitHubIcon/>
                                            </button>
                                        </a>
                                        <a href={project.web} target='_blank' rel='noreferrer'>
                                            <button className='webPro' >
                                                <LanguageIcon/>
                                            </button>
                                        </a>
                                    </SwiperSlide>
                            )}
            </Swiper>
        </div>
    )
}
