import React, { useState } from 'react'
import { home_image } from '../api'

const Proposal = () => {
    const [noBtnX,setNoBtnX] = useState(0)
    const [noBtnY,setNoBtnY] = useState(0)
    const [isSelected,setIsSelected] = useState(false);

    const moveButton =()=> {
        setNoBtnX((Math.random()*15)-10)
        setNoBtnY((Math.random()*15)-2)
    }
  return (
    <section id='proposal_section' style={{backgroundImage: `url(${require("../images/home.jpg")})`}}>
      <div className='proposal'>
        <div className='cuestion'>
            <h3>Quieres ser mi Valentine?</h3>
        </div>
        <div className='answer_buttons'>
            <button className='btn btn-success' onPointerDown={() => setIsSelected(true)}>Si</button>
            <button className='btn btn-danger' 
            onPointerDown={moveButton}
            style={{transform:`translate(${noBtnX}rem,${noBtnY}rem)`}}>
                No
            </button>
        </div>
      </div>
      <div className={`proposal_card ${isSelected && "active"}`}>
        <div className='card_content'>
            <p>Cual es nuestra fecha de aniversario?</p>
            <input className='form-control' placeholder='dd-mm-yyyy'/>
            <button className='btn btn-dark'>Enviar</button>
        </div>
      </div>
    </section>
  )
}

export default Proposal
