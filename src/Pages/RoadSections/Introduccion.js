import React from 'react'
import { heart_icon } from '../../api';

const Introduccion = () => {

    const createHearts = (n) => {
        const hearts = [];
        for (let i = 0; i < n; i++) {
          hearts.push({delay: Math.random() * 5,duration : (Math.random() * 6)+6})
        }
        return hearts;
      }
  return (
    <section className='introduction_section'>
        <div className='introduction_message_container'>
            {/* <h4>Hola, espero que te este gustando</h4>
            <h4>Baja con migo para ver mas mi amor</h4> */}
        </div>
        <div className='hearts'>
            {createHearts(10).map((item) => 
            <span style={{animationDelay:`${item.delay}s`,
            animationDuration:`${item.duration}s`}}>
                {heart_icon}
            </span>)}
        </div>
      
    </section>
  )
}

export default Introduccion
