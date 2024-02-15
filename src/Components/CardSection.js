import React, { useState } from 'react'
import { heart_icon } from '../api'

const CardSection = () => {
  const [isClicked,setIsClicked] = useState(false)

  return (
    <section id='card_section'>
        <div className='card_cover' onPointerDown={() => setIsClicked(!isClicked)}>
          <div className='card' 
          style={{transform:`translateY(${isClicked ? "-5rem":"0"})`}}>
            <div className='card_text'>
              <p>Feliz San Valentin mi amor  <span>{heart_icon}</span></p>
            </div>
          </div>
          <div className='card_front'></div>
        </div>
    </section>
  )
}

export default CardSection
