import React, { useEffect } from 'react'
import { heart_icon } from '../../api';

const Introduccion = ({isPlaying}) => {

    const createHearts = (n) => {
        const hearts = [];
        for (let i = 0; i < n; i++) {
          hearts.push({delay: Math.random() * 5,duration : (Math.random() * 6)+6})
        }
        return hearts;
      }

      useEffect(() => {
        console.log(isPlaying);
      },[isPlaying])
  return (
    <section className='introduction_section'>
        <div className={`introduction_message_container ${isPlaying && "disapear"}`}>
            <h4>Presiona para iniciar</h4>
        </div>
        <div className='hearts'>
            {createHearts(10).map((item,index) => 
            <span key={index} style={{animationDelay:`${item.delay}s`,
            animationDuration:`${item.duration}s`}}>
                {heart_icon}
            </span>)}
        </div>
      
    </section>
  )
}

export default Introduccion
