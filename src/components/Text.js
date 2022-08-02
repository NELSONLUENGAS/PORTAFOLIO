import React from 'react';
import '../scss/components/Text.scss';

export default function Text(){
    return(
        <div className='text-container' id='about'>
            <div className='text-polygon'></div>
            <p className='text-1'>Desarrollador web Full Stack, apasionado por la Música y la Tecnología,
                me gusta el desarrollo web y es a lo que me dedico, 
            </p>
            <p className="text-3">
                también soy músico profesional,
                soy una persona excelente con las relaciones personales, buen 
            </p>
            <p className="text-4">
            compañero de trabajo, responsable con el cargo, respetuoso, con mucha gracia y buen semblante
            </p>
            <p className='text-2'>
                En cuanto a desarrollo web manejo un gran grupo de herramientas para el mismo, con experiencia en Ecommerce, Autenticación, API Rest, Pasarelas de pago, etc. Cuento con la capacidad para trabajar tanto en FrontEnd como en BackEnd con conocimientos en:
            </p>
        </div>
    )
}